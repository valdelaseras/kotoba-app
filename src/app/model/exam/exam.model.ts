import { IExamSettings } from '../interfaces/exam-settings.interface';
import { IExamQuestion } from '../interfaces/exam-question.interface';
import { IDataEntry } from '../interfaces/data-entry.interface';
import { IExamGivenAnswer } from '../interfaces/exam-given-answer.interface';

const PENALTY_WEIGHT = 5;

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
    let correct = 0;

    this.questionnaire.forEach( ( examEntry: IExamQuestion ) => {
      examEntry.givenAnswers.forEach( ( givenAnswer: IExamGivenAnswer ) => {
        correct += givenAnswer.valid.filter( ( valid: boolean ) => valid ).length;
      } );
    } );

    return correct;
  }

  numberOfIncorrectAnswers(): number {
    let numIncorrect = 0;

    this.questionnaire.forEach( ( examEntry: IExamQuestion ) => {
      examEntry.givenAnswers.forEach( ( givenAnswer: IExamGivenAnswer ) => {
        numIncorrect += givenAnswer.valid.filter( ( valid: boolean ) => !valid ).length;
      } );
    } );

    return numIncorrect;
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

    return Math.round( baseScore - ( penalty / PENALTY_WEIGHT ));
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

  answerIsCorrect( answer: string ): boolean[] {
    const givenAnswers = answer.toLowerCase().replace(/ /g, '' ).split(',');

    if ( givenAnswers.length > this.questionnaire[ this.currentQuestionIndex ].answers.length ) {
      return [false];
    }

    return givenAnswers
      .map( ( givenAnswer: string ) => this.questionnaire[ this.currentQuestionIndex ].answers.includes( givenAnswer ) );
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
      // Hiragana exams
      case 'Hiragana to romaji':
        return Object.assign(question, {
          question: dataEntry[dataEntry.dataSet],
          answers: dataEntry.romaji.kun,
          placeholder: 'Romaji',
          dataSet: dataEntry.dataSet,
        });
      case 'Romaji to hiragana':
        return Object.assign(question, {
          question: dataEntry.romaji.kun.join(', '),
          answers: dataEntry.kana.kun,
          placeholder: 'Hiragana',
          dataSet: dataEntry.dataSet,
        });
        // TODO: add mixed hiragana
      case 'Katakana to romaji':
        return Object.assign(question, {
          question: dataEntry[dataEntry.dataSet],
          answers: dataEntry.romaji.on,
          placeholder: 'Romaji',
          dataSet: dataEntry.dataSet,
        });
      case 'Romaji to katakana':
        return Object.assign(question, {
          question: dataEntry.romaji.on.join(', '),
          answers: dataEntry.kana.on,
          placeholder: 'Katakana',
          dataSet: dataEntry.dataSet,
        });
        // TODO: add mixed katakana
      case 'Romaji to kanji':
        return Object.assign(question, {
          question: dataEntry.romaji.kun.join( ', ' ),
          answers: dataEntry.kanji,
          placeholder: 'Kanji',
          dataSet: dataEntry.dataSet,
          hint: dataEntry.english.join( ', ' )
        });
        // TODO: now only tested on kunyomi which is probably undesirable
      case 'Kanji to romaji':
        return Object.assign(question, {
          question: dataEntry.kanji.join( ', ' ),
          answers: dataEntry.romaji.kun,
          placeholder: 'Kunyomi',
          dataSet: dataEntry.dataSet,
          hint: dataEntry.english.join( ', ' )
        });
      case 'Kanji to kana - kunyomi':
        return Object.assign(question, {
          question: dataEntry.kanji[0],
          answers: dataEntry.kana.kun,
          placeholder: 'Kunyomi',
          dataSet: dataEntry.dataSet
          // hint: dataEntry.english.join(', ')
        });
      case 'Kanji to kana - onyomi':
        return Object.assign(question, {
          question: dataEntry.kanji[0],
          answers: dataEntry.kana.on,
          placeholder: 'Onyomi',
          dataSet: dataEntry.dataSet
          // hint: dataEntry.english.join(', ')
        });
      case 'Kana to kanji - kunyomi':
        return Object.assign(question, {
          question: dataEntry.kana.kun.join(', '),
          answers: dataEntry.kanji,
          placeholder: 'Kanji',
          dataSet: dataEntry.dataSet
          // hint: dataEntry.english.join(', ')
        });
      case 'Kana to kanji - onyomi':
        return Object.assign(question, {
          question: dataEntry.kana.on.join(', '),
          answers: dataEntry.kanji,
          placeholder: 'Kanji',
          dataSet: dataEntry.dataSet
          // hint: dataEntry.english.join(', ')
        });
      case 'Kanji to English':
        return Object.assign(question, {
          question: dataEntry.kanji[0],
          answers: dataEntry.english,
          placeholder: 'Translation',
          dataSet: dataEntry.dataSet
        });
      case 'English to kanji':
        return Object.assign(question, {
          question: dataEntry.english.join( ', ' ),
          answers: dataEntry.kanji,
          placeholder: 'Kanji',
          dataSet: dataEntry.dataSet
        });
        // TODO: add shuffle all
        // TODO: add shuffle kanji & romaji
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
}
