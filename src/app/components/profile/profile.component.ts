import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user/user.model';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: User;
  constructor( private userService: UserService ) {
    this.currentUser = this.userService.getCurrentUser();
  }

  ngOnInit(): void {
  }

}
