import { Injectable } from '@angular/core';
import { IAvailableExam } from '../../model/interfaces/available-exam.interface';
import { IDataEntry } from '../../model/interfaces/data-entry.interface';

import availableExams from '../../../datasets/available-exams/available-exams.json';
import hiragana from '../../../datasets/kana/hiragana.json';
import katakana from '../../../datasets/kana/katakana.json';
import kanjiN5 from '../../../datasets/kanji/kanjiN5.json';

@Injectable({
  providedIn: 'root'
})
export class DataSetService {

  constructor() {}

  getAvailableExams(): IAvailableExam[] {
    return availableExams;
  }

  getDataSet( name: string ): IDataEntry[] {
    let dataSet;
    switch ( name ) {
      case DATA_SET_NAME.HIRAGANA:
        dataSet = hiragana;
        break;
      case DATA_SET_NAME.KATAKANA:
        dataSet = katakana;
        break;
      case DATA_SET_NAME.KANJIN5:
        dataSet = kanjiN5;
        break;
    }
    return dataSet.map( ( dataEntry: IDataEntry ) => ({...dataEntry, dataSet: name}) );
  }
}

enum DATA_SET_NAME {
  HIRAGANA = 'hiragana',
  KATAKANA = 'katakana',
  KANJIN5 = 'kanjiN5'
}
