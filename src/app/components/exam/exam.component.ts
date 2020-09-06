import { Component, OnInit } from '@angular/core';
import { IExamQuestion } from '../../model/interfaces/exam-question.interface';
import { Router } from '@angular/router';
import { ExamService } from '../../services/exam/exam.service';
import { Exam } from '../../model/exam/exam.model';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
  exam: Exam;
  currentQuestionIndex = 0;
  currentQuestion: IExamQuestion;
  correctAnswers = [];
  incorrectAnswers = [];

  constructor( private examService: ExamService, private router: Router ) {
    this.exam = this.examService.currentExam;
  }

  ngOnInit(): void {
    this.currentQuestion = this.exam.questionnaire[ this.currentQuestionIndex];
  }

  submitForm(): void {
    if ( this.answerIsCorrect( this.currentQuestion ) ) {
      this.saveAnswer( this.currentQuestion, this.correctAnswers );
      this.updateQuestion();
    } else {
      this.saveAnswer( this.currentQuestion, this.incorrectAnswers );
    }
  }

  answerIsCorrect( currentQuestion: IExamQuestion, ): boolean {
      return currentQuestion.answer === currentQuestion.givenAnswer;
  }

  updateQuestion(): void {
    this.currentQuestion = this.exam.questionnaire[ this.currentQuestionIndex += 1];
  }

  saveAnswer( currentQuestion: IExamQuestion, array: Array<any>): void {
    // TODO: Replace with IExamQuestionEntry?
    const examQuestionEntry = {
      question: currentQuestion.question,
      answer: currentQuestion.answer,
      givenAnswer: currentQuestion.givenAnswer
    };
    array.push( examQuestionEntry );
  }

  // resolveExamEnd(): void {
    // TODO: new scoresheet( correctAnswers, incorrectAnswers )
    // this.router.navigate(['score']);
  // }
}
