import { Injectable } from '@angular/core';

import { Exam } from '../../model/exam/exam.model';

import { DataSetService } from '../dataset/data-set.service';

import { IAvailableExam } from '../../model/interfaces/available-exam.interface';
import { IExamSettings } from '../../model/interfaces/exam-settings.interface';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private currentExam: Exam;
  private previousExams: Exam[];

  constructor( private datasetService: DataSetService) {
    this.retrieveExamRecords();
  }

  createExam( selectedExam: IAvailableExam, settings: IExamSettings ): void {
    const dataSet = [];

    for ( const dataSetName of selectedExam.dataSets ) {
      dataSet.push( ...this.datasetService.getDataSet( dataSetName ) );
    }

    this.currentExam = new Exam( dataSet, settings, selectedExam.title );
  }

  getExam( timestamp?: string ): Exam {
    if ( timestamp ) {
      return this.previousExams.find( ( exam: Exam ) => exam.timestamp === timestamp );
    } else {
      return this.currentExam;
    }
  }

  getExams(): Exam[] {
    return this.previousExams;
  }

  saveExam( exam: Exam ): void {
    this.previousExams.push( exam );
    localStorage.setItem( 'ktb-exam-record', JSON.stringify( this.previousExams ) );
  }

  private retrieveExamRecords(): void {
    const examRecords = JSON.parse( localStorage.getItem('ktb-exam-record') ) || [];

    this.previousExams = examRecords.map(
      ( { dataSet, settings, title, timestamp, questionnaire } ) => new Exam( dataSet, settings, title, timestamp, questionnaire ) ) || [];
  }
}
