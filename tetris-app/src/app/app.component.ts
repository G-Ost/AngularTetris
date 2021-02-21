import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'tetris-app';
  playerInfo: { name: string, email: string };

  welcomeScreenVisibility: boolean = true;
  gameScreenVisibility: boolean = false;

  getPlayerInfo(playerInfo: { name: string, email: string }) {
    this.playerInfo = playerInfo;
  }

  startGame() {
    this.welcomeScreenVisibility = false;
    this.gameScreenVisibility = true;

  }

  playerExit() {
    this.welcomeScreenVisibility = true;
    this.gameScreenVisibility = false;
  }
}
