import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { ExamService } from './services/exam/exam.service';
import { UserService } from './services/user/user.service';

@Injectable()
export class LoggedInRouteGuard implements CanActivate {
  constructor( private userService: UserService, private router: Router ) {}

  canActivate(): boolean {
    const isLoggedIn = this.userService.getCurrentUser() !== undefined;
    if ( !isLoggedIn ) {
      this.router.navigate(['login']);
    } else {
      return true;
    }
  }
}

@Injectable()
export class ExamRouteGuard implements  CanActivate {
  constructor( private examService: ExamService, private router: Router ) {}

  canActivate(): boolean {
    const examExists = this.examService.getExam() !== undefined;
    if ( !examExists ) {
      this.router.navigate(['lobby']);
    } else {
      return true;
    }
  }
}
