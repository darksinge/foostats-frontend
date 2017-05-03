import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { AppRoutingComponent } from '../app-routing/app-routing.component';
import { ProfileComponent } from '../profile/profile.component';
import { SettingsComponent } from '../settings/settings.component';
import { GameComponent } from '../game/game.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'game', component: GameComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }
