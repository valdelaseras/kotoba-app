import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    name: undefined
  };
  constructor( private router: Router ) {}

  ngOnInit(): void {
  }

  submitForm(): void {
    this.saveToLocalStorage( this.user );
    this.router.navigate(['lobby']);
  }

  saveToLocalStorage( user ): void {
    localStorage.setItem('ktb-username', user.name );
  }
}
