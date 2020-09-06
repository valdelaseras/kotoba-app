import { Injectable } from '@angular/core';
import { IAvailableExam } from '../../model/interfaces/available-exam.interface';
import { IDataEntry } from '../../model/interfaces/data-entry.interface';

import availableExams from '../../../datasets/available-exams/available-exams.json';
import hiragana from '../../../datasets/kana/hiragana.json';
import katakana from '../../../datasets/kana/katakana.json';

@Injectable({
  providedIn: 'root'
})
export class DataSetService {

  constructor() {}

  getAvailableExams(): IAvailableExam[] {
    return availableExams;
  }

  getDataSet( name: string ): IDataEntry[] {
    switch ( name ) {
      case DATA_SET_NAME.HIRAGANA:
        return hiragana;
      case DATA_SET_NAME.KATAKANA:
        return katakana;
    }
  }
}

enum DATA_SET_NAME {
  HIRAGANA = 'hiragana',
  KATAKANA = 'katakana'
}
