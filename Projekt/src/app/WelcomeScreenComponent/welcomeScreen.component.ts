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

    }


    postToken() {
        this._scores.checkToken().subscribe(result => {
            console.log(result);
        })
    }

    openGame(playerInfo: { name: string, id: string }) {
        this._router.navigate(["/game"]);
        this._storage.setUserInfo(playerInfo);
        this.postToken();
    }

}
