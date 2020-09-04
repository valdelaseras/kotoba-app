import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: User;
  constructor() {
    this.retrieveCurrentUser();
  }

  private retrieveCurrentUser(): void {
    const username = localStorage.getItem('ktb-username');
    this.currentUser = new User( username );
  }

  getCurrentUser(): User {
    return this.currentUser;
  }
}
