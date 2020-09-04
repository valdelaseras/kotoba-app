import { Injectable } from '@angular/core';
import { Exam } from '../../model/exam/exam.model';
import {IAvailableExam} from '../dataset/available-exam.interface';
import {IExamSettings} from '../../model/exam/exam-settings.interface';
import {DataSetService} from '../dataset/data-set.service';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  currentExam: Exam;

  constructor( private datasetService: DataSetService) {}

  createExam( selectedExam: IAvailableExam, settings: IExamSettings ): Exam {
    const questionnaire = [];

    for ( const dataSetName of selectedExam.dataSets ) {
      questionnaire.push( this.datasetService.getDataSet( dataSetName ) );
    }

    return new Exam( questionnaire, settings);
  }
}
