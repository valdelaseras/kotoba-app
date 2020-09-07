import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../../services/settings/settings.service';

import { ISettings } from '../../model/interfaces/settings.interface';
import { IExamOptions } from '../../model/interfaces/exam-options.interface';
import { IVisualOptions } from '../../model/interfaces/visual-options.interface';
import { IGeneralOptions } from '../../model/interfaces/general-options.interface';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  currentSettings: ISettings;
  examOptions: IExamOptions;
  visualOptions: IVisualOptions;
  generalOptions: IGeneralOptions;

  constructor( private settingsService: SettingsService ) {
    this.currentSettings = this.settingsService.getSettings();
    this.examOptions = this.settingsService.getExamOptions();
    this.visualOptions = this.settingsService.getVisualOptions();
    this.generalOptions = this.settingsService.getGeneralOptions();
  }

  ngOnInit(): void {
  }

  updateSettings(): void {
    this.settingsService.updateSettings( this.currentSettings );
  }
}
