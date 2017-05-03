import { Component, OnInit } from '@angular/core';

import { HomeComponent } from '../home/home.component';
import { ProfileComponent } from '../profile/profile.component';
import { SettingsComponent } from '../settings/settings.component';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-routing',
  templateUrl: './app-routing.component.html',
  styleUrls: ['./app-routing.component.css']
})
export class AppRoutingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
