import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { ScoresService } from "../scores.service"

@Component({
    selector: 'welcomeScreen',
    templateUrl: './welcomeScreen.component.html',
    styleUrls: ['./welcomeScreen.component.css']
})
export class WelcomeScreenComponent {

    constructor(
        private _router: Router,
        private _storage: StorageService,
        private _scores: ScoresService
    ) {
        // this._storage.resetLocalStorage();
    }


    postToken() {
        this._scores.checkToken().subscribe(result => {
            console.log(result);
        })
    }

    openGame(playerInfo: { name: string, id: string, color: string }) {
        this._router.navigate(["/game", playerInfo.color]);
        this._storage.setUserInfo({ name: playerInfo.name, id: playerInfo.id, color: playerInfo.color });
        this.postToken();
    }

}
