import { IExamSettings } from '../interfaces/exam-settings.interface';
import { IExamQuestion } from '../interfaces/exam-question.interface';
import { IDataEntry } from '../interfaces/data-entry.interface';

export class Exam {
  questionnaire: IExamQuestion[];
  dataSet: IDataEntry[];
  settings: IExamSettings;
  title: string;

  constructor( dataSet: IDataEntry[], settings: IExamSettings, title: string ){
    this.dataSet = dataSet;
    this.settings = settings;
    this.title = title;

    this.initializeQuestionnaire();
  }

  initializeQuestionnaire(): void {
    this.questionnaire = this.dataSet.map( this.getQuestion.bind( this ));
    this.shuffleOrder( this.questionnaire );
  }

  private getQuestion( dataEntry: IDataEntry ): IExamQuestion {
    switch ( this.settings.method ) {
      case 'Hiragana to romaji':
        return { question: dataEntry.kana, answer: dataEntry.romaji, placeholder: 'Romaji' };
      case 'Romaji to hiragana':
        return { question: dataEntry.romaji, answer: dataEntry.kana, placeholder: 'Hiragana' };
      case 'Shuffle':
        const random = Math.random();
        return {
          question: random > .5 ? dataEntry.romaji : dataEntry.kana,
          answer: random > .5 ? dataEntry.kana : dataEntry.romaji,
          placeholder: random > .5 ? 'Hiragana' : 'Romaji'
        };
    }
  }

  shuffleOrder( questionnaire ): void  {
    for ( let i = questionnaire.length - 1; i > 0; i-- ) {
      const random = Math.floor(Math.random() * i);
      const shuffledQuestionnaire = questionnaire[i];
      questionnaire[i] = questionnaire[random];
      questionnaire[random] = shuffledQuestionnaire;
    }
  }
}
