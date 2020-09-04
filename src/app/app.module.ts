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
import { QuestionComponent } from './components/question/question.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { ScoreComponent } from './components/score/score.component';
import { HistoryComponent } from './components/history/history.component';
import { CustomListsComponent } from './components/custom-lists/custom-lists.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ScoreHistoryComponent } from './components/score-history/score-history.component';
import { SecondaryNavComponent } from './components/decorator/secondary-nav/secondary-nav.component';
import { AvailableExamsComponent } from './components/lobby/available-exams/available-exams.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    PopupComponent,
    LobbyComponent,
    LandingComponent,
    ExamComponent,
    QuestionComponent,
    ProfileComponent,
    AboutComponent,
    LoginComponent,
    ScoreComponent,
    HistoryComponent,
    CustomListsComponent,
    SettingsComponent,
    ScoreHistoryComponent,
    SecondaryNavComponent,
    AvailableExamsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
