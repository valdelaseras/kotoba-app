import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../../../services/score/score.service';
import { Score } from '../../../model/score/score.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scoresheet',
  templateUrl: './score-sheet.component.html',
  styleUrls: ['./score-sheet.component.scss']
})
export class ScoreSheetComponent implements OnInit {
  score: Score;

  constructor( private scoreService: ScoreService, private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => this.score = this.scoreService.getScore( paramMap.get( 'timestamp' ) ) );

  }

}
