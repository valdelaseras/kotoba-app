import { Component } from '@angular/core';
import { ExamService } from '../../services/exam/exam.service';
import { Exam } from '../../model/exam/exam.model';

@Component({
  selector: 'app-score-history',
  templateUrl: './score-history.component.html',
  styleUrls: ['./score-history.component.scss']
})
export class ScoreHistoryComponent {
  exams: Exam[];
  constructor( private examService: ExamService ) {
    this.exams = this.examService.getExams();
  }
}

