import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../storage.service';
import { ScoresService } from "../../scores.service";
import { PlayerInfo } from "../gameScreen.component";
export interface DisplayedScores {
    source?: string,
    name: string,
    score: number;
}

@Component({
    selector: 'scoreScreen',
    templateUrl: './scoreScreen.component.html',
    styleUrls: ['./scoreScreen.component.css']
})

export class ScoreScreenComponent {
    constructor(
        private _router: Router,
        private _scores: ScoresService,
        private _storage: StorageService) {

        this.externalScores = this._storage.passExternalScores();
        this.loadHighScores();
        this.assignPlayerInfoToMyScores(this._storage.passScores());
    }

    loadHighScores() {
        for (let i = 0; i < this.externalScores.length; i++) {
            this.externalScores[i].source = "external";
        }
        this.displayedScores = [...this.myScores, ...this.externalScores]


        // this._scores.load().subscribe(result => {
        //     this.externalScores = result;
        //     for (let i = 0; i < this.externalScores.length; i++) {
        //         this.externalScores[i].source = "external";
        //     }
        //     this.displayedScores = [...this.myScores, ...this.externalScores]
        // })

    }

    assignPlayerInfoToMyScores(array: Array<PlayerInfo>) {
        for (let i = 0; i < array.length; i++) {
            this.myScores.push({ name: array[i].name, score: array[i].points, source: "mine" })
        }
    }


    public myScores: Array<DisplayedScores> = [];
    public externalScores: Array<DisplayedScores> = [];
    public displayedScores: Array<DisplayedScores> = [];
    public scoreSortCondition: string = "descending";
    public scoreFilterCondition: string = "all";
    public hideScores() {
        this._router.navigate(["/game"]);

    };
}
