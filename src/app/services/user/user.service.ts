import { Injectable } from '@angular/core';

import { User } from '../../model/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: User;
  constructor() {
    this.retrieveCurrentUser();
  }

  private retrieveCurrentUser(): void {
    const username = localStorage.getItem('ktb-username');

    if ( username ) {
      this.currentUser = new User( username );
    }
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  setCurrentUser( username: string ): void {
    this.currentUser = new User( username );
  }
}
