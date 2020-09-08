import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IExamQuestion } from '../../model/interfaces/exam-question.interface';
import { IExamGivenAnswer } from '../../model/interfaces/exam-given-answer.interface';
import { IExamSettings } from '../../model/interfaces/exam-settings.interface';

import { Exam } from '../../model/exam/exam.model';

import { ExamService } from '../../services/exam/exam.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
  exam: Exam;
  currentQuestion: IExamQuestion;
  givenAnswer: IExamGivenAnswer = {
    entry: undefined,
    valid: undefined
  };
  currentSettings: IExamSettings;
  allowedRetries: number;
  attempt = 0;

  constructor( private examService: ExamService,
               private router: Router ) {
    this.exam = this.examService.getExam();
    this.currentSettings = this.exam.settings;
    this.allowedRetries = this.getAllowedRetries( this.currentSettings );
  }

  ngOnInit(): void {
    this.currentQuestion = this.exam.getQuestion();
  }

  submitForm(): void {
    this.givenAnswer.valid = this.exam.answerIsCorrect( this.givenAnswer.entry );
    this.saveGivenAnswerEntry();

    if ( this.givenAnswer.valid ) {
      this.resetGivenAnswer();
      this.updateQuestion();
    } else if ( !this.givenAnswer.valid ) {
      this.attempt += 1;
      if ( this.attempt === this.allowedRetries ) {
        this.resolveQuestionRepeat();
        this.updateQuestion();
      }
    }
  }

  resetGivenAnswer(): void {
    this.givenAnswer = {
      entry: undefined,
      valid: undefined
    };
  }

  updateQuestion(): void {
    if ( this.exam.isLastQuestion() ) {
      this.examService.saveExam( this.exam );
      this.router.navigate(['score', this.exam.timestamp]);
    } else {
      this.exam.incrementQuestion();
      this.currentQuestion = this.exam.getQuestion();
      this.resetGivenAnswer();
    }

    this.attempt = 0;
  }

  saveGivenAnswerEntry( ): void {
    this.currentQuestion.givenAnswers.push( Object.assign({}, this.givenAnswer) );
  }

  // TODO: when refactoring, move this to Exam model
  getAllowedRetries( examSettings: IExamSettings ): number {
    if ( examSettings.retry === 'None') {
      return this.allowedRetries = 1;
    } else if ( examSettings.retry === 'Once') {
      return this.allowedRetries = 2;
    } else if ( examSettings.retry === 'Twice' ) {
      return this.allowedRetries = 3;
    } else {
      return;
    }
  }

  // TODO: when refactoring, move this to Exam model
  resolveQuestionRepeat(): void {
    if ( this.exam.settings.repeat === 'Repeat until answered correctly') {
      this.exam.appendQuestion( this.currentQuestion );
    }
  }
}
