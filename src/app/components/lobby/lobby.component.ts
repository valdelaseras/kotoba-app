import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from '../../model/user/user.model';
import { DataSetService } from '../../services/dataset/data-set.service';
import { IAvailableExam } from '../../model/interfaces/available-exam.interface';
import { Router} from '@angular/router';
import { ExamService } from '../../services/exam/exam.service';
import { IExamSettings } from '../../model/interfaces/exam-settings.interface';
import { IExamOptions } from '../../model/interfaces/exam-options.interface';
import { SettingsService } from '../../services/settings/settings.service';
import { ISettings } from '../../model/interfaces/settings.interface';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent {
  currentUser: User;
  currentSettings: ISettings;
  availableExams: IAvailableExam[];
  examSettings: IExamSettings = {
    retry: undefined,
    repeat: undefined,
    method: undefined,
  };
  examOptions: IExamOptions;

  selectedAvailableExam: IAvailableExam;

  constructor( private userService: UserService,
               private datasetService: DataSetService,
               private examService: ExamService,
               private router: Router,
               private settingsService: SettingsService ) {
    this.currentSettings = this.settingsService.getSettings();
    this.currentUser = this.userService.getCurrentUser();
    this.availableExams = this.datasetService.getAvailableExams();
    this.examOptions = this.settingsService.getExamOptions();
    this.selectAvailableExam(  this.availableExams[0] );
    this.examSettings.retry = this.currentSettings.examSettings.retry;
    this.examSettings.repeat = this.currentSettings.examSettings.repeat;
  }

  selectAvailableExam( availableExam: IAvailableExam ): void {
    this.selectedAvailableExam = availableExam;
    this.examSettings.method = availableExam.methods[1];
  }

  submitSelectedExam(): void {
    this.examService.createExam( this.selectedAvailableExam, this.examSettings );
    this.router.navigate(['exam']);
  }
}
