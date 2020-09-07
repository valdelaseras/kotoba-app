import {IExamQuestionEntry} from '../interfaces/exam-question-entry.interface';
import {IExamGivenAnswer} from '../interfaces/exam-given-answer.interface';

export class Score {
  timestamp: string;
  private examEntries: IExamQuestionEntry[] = [];

  constructor() {
    this.timestamp = Date.now().toString( 10 );
  }

  addEntry( examEntry: IExamQuestionEntry ): void {
    this.examEntries.push( examEntry );
  }

  getEntries(): IExamQuestionEntry[] {
    return this.examEntries;
  }

  numberOfCorrectAnswers(): number {
    return this.examEntries.reduce( ( previousValue: number, examEntry: IExamQuestionEntry ) =>
      previousValue += examEntry.givenAnswers.filter( ( givenAnswer: IExamGivenAnswer ) => givenAnswer.valid )
        .length, 0
    );
  }

  numberOfIncorrectAnswers(): number {
    return this.examEntries.reduce( ( previousValue: number, examEntry: IExamQuestionEntry ) =>
      previousValue += examEntry.givenAnswers.filter( ( givenAnswer: IExamGivenAnswer ) => !givenAnswer.valid )
        .length, 0
    );
  }
}
