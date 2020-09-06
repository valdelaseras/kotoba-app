import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/decorator/nav/nav.component';
import { FooterComponent } from './components/decorator/footer/footer.component';
import { PopupComponent } from './components/popup/popup.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { LandingComponent } from './components/landing/landing.component';
import { ExamComponent } from './components/exam/exam.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { HistoryComponent } from './components/history/history.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ScoreHistoryComponent } from './components/score-history/score-history.component';
import { SecondaryNavComponent } from './components/decorator/secondary-nav/secondary-nav.component';
import { AvailableExamsComponent } from './components/lobby/available-exams/available-exams.component';
import { UserService } from './services/user/user.service';
import { ExamService } from './services/exam/exam.service';
import { DataSetService } from './services/dataset/data-set.service';
import { ScoreSheetComponent } from './components/score-sheet/score-sheet/score-sheet.component';
import {SettingsService} from './services/settings/settings.service';

const components = [
  AppComponent,
  NavComponent,
  FooterComponent,
  PopupComponent,
  LobbyComponent,
  LandingComponent,
  ExamComponent,
  ProfileComponent,
  AboutComponent,
  LoginComponent,
  HistoryComponent,
  SettingsComponent,
  ScoreHistoryComponent,
  SecondaryNavComponent,
  ScoreSheetComponent,
  AvailableExamsComponent
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    ExamService,
    SettingsService,
    DataSetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
