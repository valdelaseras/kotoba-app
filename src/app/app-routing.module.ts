import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { LobbyComponent } from './lobby/lobby.component';
import { LandingComponent } from './landing/landing.component';
import { ExamComponent } from './exam/exam.component';
import { ScoreComponent} from './score/score.component';
import { ScoreHistoryComponent } from './score-history/score-history.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'lobby', component: LobbyComponent },
  { path: 'exam', component: ExamComponent },
  { path: 'score', component: ScoreComponent },
  { path: 'score-history', component: ScoreHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
