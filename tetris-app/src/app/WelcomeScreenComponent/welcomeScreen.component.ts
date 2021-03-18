import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';


@Component({
    selector: 'welcomeScreen',
    templateUrl: './welcomeScreen.component.html',
    styleUrls: ['./welcomeScreen.component.css']
})
export class WelcomeScreenComponent {

    constructor(
        private _router: Router,
        private _storage: StorageService
    ) { }




    openGame(playerInfo) {
        this._router.navigate(["/game"]);
        this._storage.setUserInfo(playerInfo);
    }
    getPlayerInfo(playerInfo: { name: string, email: string }) {
        this.openGame(playerInfo);

    }
}
