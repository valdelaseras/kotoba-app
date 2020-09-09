import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kotoba-app';

  constructor( private router: Router, private userService: UserService ) {}

  ngOnInit(): void {
  }

  onLogin(): boolean {
    return this.router.url.includes('login');
  }

  onActivate(): void {
    window.scroll(0, 0 );
  }
}
