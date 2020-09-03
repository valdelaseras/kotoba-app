import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './decorator/nav/nav.component';
import { FooterComponent } from './decorator/footer/footer.component';
import { PopupComponent } from './popup/popup.component';
import { LobbyComponent } from './lobby/lobby.component';
import { LandingComponent } from './landing/landing.component';
import { ExamComponent } from './exam/exam.component';
import { QuestionComponent } from './question/question.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ScoreComponent } from './score/score.component';
import { HistoryComponent } from './history/history.component';
import { CustomListsComponent } from './custom-lists/custom-lists.component';
import { SettingsComponent } from './settings/settings.component';
import { ScoreHistoryComponent } from './score-history/score-history.component';
import { SecondaryNavComponent } from './secondary-nav/secondary-nav.component';

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
    SecondaryNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
