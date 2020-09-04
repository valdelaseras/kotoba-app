import { IExamSettings } from './exam-settings.interface';
import { IExamQuestion } from './exam-question.interface';

export class Exam {
  questionnaire: IExamQuestion[];
  settings: IExamSettings;

  constructor( questionnaire: IExamQuestion[], settings: IExamSettings ){
    this.questionnaire = questionnaire;
    this.settings = settings;
  }
}
