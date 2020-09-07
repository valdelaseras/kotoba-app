import { Component } from '@angular/core';

import { ScoreService } from '../../services/score/score.service';
import {Score} from '../../model/score/score.model';

@Component({
  selector: 'app-score-history',
  templateUrl: './score-history.component.html',
  styleUrls: ['./score-history.component.scss']
})
export class ScoreHistoryComponent {
  records: Score[];
  constructor( private scoreService: ScoreService ) {
    this.records = this.scoreService.getScoreRecords();
  }
}
