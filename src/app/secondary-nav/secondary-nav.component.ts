import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-secondary-nav',
  templateUrl: './secondary-nav.component.html',
  styleUrls: ['./secondary-nav.component.scss']
})
export class SecondaryNavComponent implements OnInit {

  constructor( private location: Location ) { }

  ngOnInit(): void {
  }

  back(): void {
      this.location.back();
  }
}
