import { Component, OnInit } from '@angular/core';
import {ScoreService} from '../../services/score/score.service';

@Component({
  selector: 'app-score-history',
  templateUrl: './score-history.component.html',
  styleUrls: ['./score-history.component.scss']
})
export class ScoreHistoryComponent implements OnInit {

  constructor( private scoreService: ScoreService ) {
    // this.scoreRecords = this.scoreService.
  }

  ngOnInit(): void {
  }

}
