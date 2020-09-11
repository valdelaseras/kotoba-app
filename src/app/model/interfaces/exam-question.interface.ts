import { IExamGivenAnswer } from './exam-given-answer.interface';

export interface IExamQuestion {
  question: string;
  answers: string[];
  placeholder: string;
  dataSet: string;
  givenAnswers: IExamGivenAnswer[];
  hint?: string;
}
