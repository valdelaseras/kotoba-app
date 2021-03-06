import { Injectable } from '@angular/core';

import { ISettings } from '../../model/interfaces/settings.interface';
import { IExamOptions } from '../../model/interfaces/exam-options.interface';
import { IVisualOptions } from '../../model/interfaces/visual-options.interface';
import { IGeneralOptions } from '../../model/interfaces/general-options.interface';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private settings: ISettings;
  constructor() {
    this.retrieveStoredSettings();
  }

  private retrieveStoredSettings(): void {
    const settings = JSON.parse(localStorage.getItem('ktb-settings'));

    if ( settings ) {
      this.settings = settings;
    } else {
      this.settings = {
        examSettings: {
          retry: 'Twice',
          repeat: 'Repeat until answered correctly',
        },

        generalSettings: {
          record: true,
        },

        visualSettings: {
          theme: 'dark-theme',
          font: 'helvetica',
          fontSize: 'normal'
        }
      };
      this.updateSettings( this.settings );
    }
  }

  getSettings(): ISettings {
    return this.settings;
  }

  updateSettings( settings: ISettings ): void {
    Object.assign( this.settings, settings );
    localStorage.setItem( 'ktb-settings', JSON.stringify( this.settings ));
  }

  getExamOptions(): IExamOptions {
    return  {
      retry: ['None', 'Once', 'Twice', 'Infinite retries'],
      repeat: ['Repeat until answered correctly', 'Never repeat']
    };
  }

  getVisualOptions(): IVisualOptions {
    return {
      theme: ['dark-theme', 'light-theme'],
      font: ['helvetica', 'montserrat', 'comfortaa'],
      fontSize: ['normal', 'large', 'xl']
    };
  }

  getGeneralOptions(): IGeneralOptions {
    return {
      record: [ true, false ]
    };
  }
}
