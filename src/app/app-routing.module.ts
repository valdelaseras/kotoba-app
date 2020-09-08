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
import { ExamRouteGuard, LoggedInRouteGuard } from './route-guard';

const routes: Routes = [
  { path: 'login', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [LoggedInRouteGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [LoggedInRouteGuard] },
  { path: 'lobby', component: LobbyComponent, canActivate: [LoggedInRouteGuard] },
  { path: 'exam', component: ExamComponent, canActivate: [LoggedInRouteGuard, ExamRouteGuard] },
  { path: 'score/:timestamp', component: ScoreSheetComponent, canActivate: [LoggedInRouteGuard] },
  { path: 'score-history', component: ScoreHistoryComponent, canActivate: [LoggedInRouteGuard] },
  { path: '', pathMatch: 'full', redirectTo: 'lobby'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
