import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {
  currentUser: User;
  constructor( private userService: UserService ) {
    this.currentUser = this.userService.getCurrentUser();
  }

  ngOnInit(): void {
  }
}
