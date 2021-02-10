import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tetris-app';
  playerInfo = ["placeholder", "placeholder", "hidden"];
  welcomeVisibility = "visible";

  getPlayerInfo(playerInfo: Array<string>) {
    this.playerInfo = playerInfo;
  }
  getExit(visibilityInfo) {
    this.welcomeVisibility = visibilityInfo;
  }
}
