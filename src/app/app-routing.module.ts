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
import { RouteGuard } from './route-guard';

const routes: Routes = [
  { path: 'login', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [RouteGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [RouteGuard] },
  { path: 'lobby', component: LobbyComponent, canActivate: [RouteGuard] },
  { path: 'exam', component: ExamComponent, canActivate: [RouteGuard] },
  { path: 'score/:timestamp', component: ScoreSheetComponent, canActivate: [RouteGuard] },
  { path: 'score-history', component: ScoreHistoryComponent, canActivate: [RouteGuard] },
  { path: '', pathMatch: 'full', redirectTo: 'lobby'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
