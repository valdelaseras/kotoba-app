import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ExamService} from '../../../services/exam/exam.service';
import {Exam} from '../../../model/exam/exam.model';

@Component({
  selector: 'app-scoresheet',
  templateUrl: './score-sheet.component.html',
  styleUrls: ['./score-sheet.component.scss']
})
export class ScoreSheetComponent implements OnInit {
  exam: Exam;

  constructor( private examService: ExamService, private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => this.exam = this.examService.getExam( paramMap.get( 'timestamp' ) ) );
  }
  // TODO: if user has local record disabled, throw local storage scoresheet away after navigating away from score sheet
}
