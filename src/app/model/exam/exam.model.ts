import { IExamSettings } from '../interfaces/exam-settings.interface';
import { IExamQuestion } from '../interfaces/exam-question.interface';
import { IDataEntry } from '../interfaces/data-entry.interface';
import {IExamGivenAnswer} from '../interfaces/exam-given-answer.interface';

const PENALTY_WEIGHT = 10;

export class Exam {
  timestamp: string;
  dataSet: IDataEntry[];
  settings: IExamSettings;
  title: string;
  private questionnaire: IExamQuestion[];
  private currentQuestionIndex = 0;

  constructor( dataSet: IDataEntry[], settings: IExamSettings, title: string, timestamp?: string, questionnaire?: IExamQuestion[] ){
    this.dataSet = dataSet;
    this.settings = settings;
    this.title = title;

    if ( timestamp ) {
      this.timestamp = timestamp;
    } else {
      this.timestamp = Date.now().toString( 10 );
    }

    if ( questionnaire ) {
      this.questionnaire = questionnaire;
    } else {
      this.initializeQuestionnaire();
    }
  }

  currentQuestionNumber(): number {
    return this.currentQuestionIndex + 1;
  }

  numberOfCorrectAnswers(): number {
    return this.questionnaire.reduce( ( previousValue: number, examEntry: IExamQuestion ) =>
      previousValue += examEntry.givenAnswers.filter( ( givenAnswer: IExamGivenAnswer ) => givenAnswer.valid )
        .length, 0
    );
  }

  numberOfIncorrectAnswers(): number {
    return this.questionnaire.reduce( ( previousValue: number, examEntry: IExamQuestion ) =>
      previousValue += examEntry.givenAnswers.filter( ( givenAnswer: IExamGivenAnswer ) => !givenAnswer.valid )
        .length, 0
    );
  }

  getQuestions( validOnly?: boolean ): IExamQuestion[] {
    let answers;
    if ( validOnly === true ) {
      answers = this.questionnaire.filter(
        ( entry: IExamQuestion ) => entry.givenAnswers.filter( ( givenAnswer: IExamGivenAnswer ) => givenAnswer.valid ).length );
    } else if ( validOnly === false ) {
      answers = this.questionnaire.filter(
        ( entry: IExamQuestion ) => !entry.givenAnswers.filter( ( givenAnswer: IExamGivenAnswer ) => givenAnswer.valid ).length );
    } else {
      answers = this.questionnaire;
    }

    return answers;
  }

  getScore(): number {
    const baseScore = 100 - ((this.getQuestions( false ).length / this.getQuestions().length) * 100);
    const penalty = ( this.numberOfIncorrectAnswers() / this.numberOfCorrectAnswers()) * 100;

    return baseScore - ( penalty / PENALTY_WEIGHT );
  }

  incrementQuestion(): void {
    this.currentQuestionIndex++;
  }

  isLastQuestion(): boolean {
    return this.currentQuestionIndex === this.questionnaire.length - 1;
  }

  getQuestion(): IExamQuestion {
    return this.questionnaire[ this.currentQuestionIndex ];
  }

  answerIsCorrect( answer: string ): boolean {
    return this.questionnaire[ this.currentQuestionIndex ].answer === answer.toLowerCase();
  }

  appendQuestion( question: IExamQuestion ): void {
    const repeatedQuestion = Object.assign( {}, question );
    repeatedQuestion.givenAnswers = [];
    this.questionnaire.push( repeatedQuestion );
  }

  private initializeQuestionnaire(): void {
    this.questionnaire = this.dataSet.map( this.createQuestion.bind( this ));
    this.shuffleOrder( this.questionnaire );
  }

  private createQuestion( dataEntry: IDataEntry ): IExamQuestion {
    const question = {
      givenAnswers: []
    };

    switch ( this.settings.method ) {
      case 'Katakana to romaji':
      case 'Hiragana to romaji':
        return Object.assign( question, { question: dataEntry.kana, answer: dataEntry.romaji, placeholder: 'Romaji' } );
      case 'Romaji to katakana':
      case 'Romaji to hiragana':
        return Object.assign( question, { question: dataEntry.romaji, answer: dataEntry.kana, placeholder: 'Hiragana' } );
      case 'Shuffle':
        const random = Math.random();
        return Object.assign( question, {
          question: random > .5 ? dataEntry.romaji : dataEntry.kana,
          answer: random > .5 ? dataEntry.kana : dataEntry.romaji,
          placeholder: random > .5 ? 'Hiragana' : 'Romaji'
        } );
    }
  }

  private shuffleOrder( questionnaire: IExamQuestion[] ): void  {
    for ( let i = questionnaire.length - 1; i > 0; i-- ) {
      const random = Math.floor(Math.random() * i);
      const shuffledQuestionnaire = questionnaire[i];
      questionnaire[i] = questionnaire[random];
      questionnaire[random] = shuffledQuestionnaire;
    }
  }

  private addToQuestionnaire( examSettings: IExamSettings, remainingQuestionnaire, question ): void {
    // remainingQuestionnaire = questionnaire - correctly answered questions so far
    if ( examSettings.repeat === 'Repeat until answered correctly') {
      remainingQuestionnaire.push( question );
      // add wrongly answered question to remainingQuestionnaire
      this.shuffleOrder( remainingQuestionnaire );
    }
  }
}
