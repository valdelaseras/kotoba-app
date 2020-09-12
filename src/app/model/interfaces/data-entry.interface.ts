import { IReadings } from './readings.interface';

export interface IDataEntry{
  kanji?: string[];
  romaji: IReadings;
  kana: IReadings;
  english?: string[];
  dataSet?: string;
}
