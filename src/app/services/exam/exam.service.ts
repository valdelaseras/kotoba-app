import { Injectable } from '@angular/core';

import { Exam } from '../../model/exam/exam.model';

import { DataSetService } from '../dataset/data-set.service';

import { IAvailableExam } from '../../model/interfaces/available-exam.interface';
import { IExamSettings } from '../../model/interfaces/exam-settings.interface';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  currentExam: Exam;

  constructor( private datasetService: DataSetService) {}

  createExam( selectedExam: IAvailableExam, settings: IExamSettings ): void {
    const dataSet = [];

    for ( const dataSetName of selectedExam.dataSets ) {
      dataSet.push( ...this.datasetService.getDataSet( dataSetName ) );
    }

    this.currentExam = new Exam( dataSet, settings, selectedExam.title );
  }
}
