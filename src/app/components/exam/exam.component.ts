import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IExamQuestion } from '../../model/interfaces/exam-question.interface';
import { IExamQuestionEntry } from '../../model/interfaces/exam-question-entry.interface';
import { IExamGivenAnswer } from '../../model/interfaces/exam-given-answer.interface';
import { ISettings } from '../../model/interfaces/settings.interface';

import { Exam } from '../../model/exam/exam.model';
import { Score } from '../../model/score/score.model';

import { ExamService } from '../../services/exam/exam.service';
import { ScoreService } from '../../services/score/score.service';
import { SettingsService } from '../../services/settings/settings.service';
import {IExamSettings} from '../../model/interfaces/exam-settings.interface';

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
  currentSettings: IExamSettings;
  allowedRetries: number;
  attempt = 0;

  constructor( private examService: ExamService,
               private scoreService: ScoreService,
               private router: Router ) {
    this.exam = this.examService.currentExam;
    this.currentSettings = this.exam.settings;
    this.allowedRetries = this.getAllowedRetries( this.currentSettings );
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
    } else if ( !this.givenAnswer.valid ){
      this.attempt += 1;
      if ( this.attempt === this.allowedRetries ) {
        this.updateQuestion();
      }
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

    this.attempt = 0;
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

  // TODO: whe refactoring, move this to Exam model
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

  // TODO: whe refactoring, move this to Exam model
  // resolveQuestionRepeat(){}
}
