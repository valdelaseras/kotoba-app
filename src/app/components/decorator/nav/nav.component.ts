import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  menuIsOpen = false;

  constructor( private router: Router ) {
    this.router.events.pipe(
      filter( event => event instanceof NavigationEnd )
    ).subscribe( ( event: NavigationEnd ) => {
      this.menuIsOpen = false;
    });
  }

  ngOnInit(): void {
  }

}
