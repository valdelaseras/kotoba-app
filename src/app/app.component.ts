import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './services/user/user.service';
import { SettingsService } from './services/settings/settings.service';
import { ISettings } from './model/interfaces/settings.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kotoba-app';
  settings: ISettings;

  constructor( private router: Router,
               private userService: UserService,
               private settingService: SettingsService ) {
    this.settings = this.settingService.getSettings();
  }

  ngOnInit(): void {
  }

  onLogin(): boolean {
    return this.router.url.includes('login');
  }

  onActivate(): void {
    window.scroll(0, 0 );
  }
}
