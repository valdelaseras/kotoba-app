import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { LandingComponent } from './components/landing/landing.component';
import { ExamComponent } from './components/exam/exam.component';
import { ScoreHistoryComponent } from './components/score-history/score-history.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ScoreSheetComponent } from './components/score-sheet/score-sheet/score-sheet.component';

const routes: Routes = [
  { path: 'login', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'lobby', component: LobbyComponent },
  { path: 'exam', component: ExamComponent },
  { path: 'score', component: ScoreSheetComponent },
  { path: 'score-history', component: ScoreHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
