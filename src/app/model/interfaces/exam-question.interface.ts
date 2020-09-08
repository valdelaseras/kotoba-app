import {IExamGivenAnswer} from './exam-given-answer.interface';

export interface IExamQuestion {
  question: string;
  answer: string;
  placeholder: string;
  givenAnswers: IExamGivenAnswer[];
}
