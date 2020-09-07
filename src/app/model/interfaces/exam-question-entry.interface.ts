import { IExamGivenAnswer } from './exam-given-answer.interface';

export interface IExamQuestionEntry {
  question: string;
  answer: string;
  givenAnswers: IExamGivenAnswer[];
}
