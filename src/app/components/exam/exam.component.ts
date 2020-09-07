import { Component, OnInit } from '@angular/core';
import { IExamQuestion } from '../../model/interfaces/exam-question.interface';
import { Router } from '@angular/router';
import { ExamService } from '../../services/exam/exam.service';
import { Exam } from '../../model/exam/exam.model';
import {IExamQuestionEntry} from '../../model/interfaces/exam-question-entry.interface';
import {IExamGivenAnswer} from '../../model/interfaces/exam-given-answer.interface';
import {Score} from '../../model/score/score.model';
import {ScoreService} from '../../services/score/score.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
  exam: Exam;
  score: Score;
  currentQuestionIndex = 0;
  currentQuestion: IExamQuestion;
  currentExamQuestionEntry: IExamQuestionEntry;
  givenAnswer: IExamGivenAnswer = {
    entry: undefined,
    valid: false
  };
  answerCorrect = true;

  constructor( private examService: ExamService,
               private scoreService: ScoreService,
               private router: Router ) {
    this.exam = this.examService.currentExam;
    this.score = new Score();
  }

  ngOnInit(): void {
    this.currentQuestion = this.exam.questionnaire[ this.currentQuestionIndex];
    this.initExamQuestionEntry( this.currentQuestion );
  }

  submitForm(): void {
    this.givenAnswer.valid = this.answerIsCorrect();
    this.saveGivenAnswerEntry();

    if ( this.givenAnswer.valid ) {
      this.givenAnswer.entry = undefined;
      this.updateQuestion();
    }
  }

  answerIsCorrect(): boolean {
    this.answerCorrect = this.currentQuestion.answer === this.givenAnswer.entry;
    return this.answerCorrect;
  }

  updateQuestion(): void {
    if ( this.currentQuestionIndex + 1 >= this.exam.questionnaire.length ) {
      this.scoreService.setScore( this.score );
      this.router.navigate(['score', this.score.timestamp]);
    } else {
      this.currentQuestion = this.exam.questionnaire[ this.currentQuestionIndex += 1];
      this.initExamQuestionEntry( this.currentQuestion );
    }
  }

  initExamQuestionEntry( currentQuestion: IExamQuestion ): void {
    this.currentExamQuestionEntry = {
      question: currentQuestion.question,
      answer: currentQuestion.answer,
      givenAnswers: [],
    };
    this.score.addEntry( this.currentExamQuestionEntry );
  }

  saveGivenAnswerEntry( ): void {
    this.currentExamQuestionEntry.givenAnswers.push( Object.assign({}, this.givenAnswer) );
  }

  // resolveExamEnd(): void {
    // TODO: new scoresheet( correctAnswers, incorrectAnswers )
    // this.router.navigate(['score']);
  // }
}
