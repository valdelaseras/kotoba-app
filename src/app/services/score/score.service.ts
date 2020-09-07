import { Injectable } from '@angular/core';
import {Score} from '../../model/score/score.model';
import {SettingsService} from '../settings/settings.service';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private scoreRecords: Score[];
  private score: Score;

  constructor( private settingsService: SettingsService ) {
    this.retrieveScoreRecord();
  }

  setScore( score: Score ): void {
    this.score = score;

    if ( this.settingsService.getSettings().generalSettings.record ) {
      this.saveScoreRecord();
    }
  }

  getScore( timestamp: string ): Score {
    return this.scoreRecords.find( scoreRecord => scoreRecord.timestamp === timestamp );
  }

  getScoreRecords(): any[] {
    return this.scoreRecords;
  }

  retrieveScoreRecord(): void {
    const scoreRecords = JSON.parse( localStorage.getItem('ktb-score-record') );

    this.scoreRecords = scoreRecords || [];
  }

  saveScoreRecord(): void {
    this.scoreRecords.push( this.score );
    localStorage.setItem( 'ktb-score-record', JSON.stringify( this.scoreRecords ) );
  }
}
