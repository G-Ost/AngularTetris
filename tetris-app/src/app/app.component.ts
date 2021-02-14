import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tetris-app';
  playerInfo = ["placeholder", "placeholder", "visible"];

  getPlayerInfo(playerInfo: Array<string>) {
    this.playerInfo = playerInfo;
  }
  public stateNumber: number = 1;
  getExit(stateNumber: number) {
    this.stateNumber = stateNumber;
  }
}
