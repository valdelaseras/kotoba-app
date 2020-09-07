import { CanActivate, Router } from '@angular/router';
import { UserService } from './services/user/user.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RouteGuard implements CanActivate {
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
