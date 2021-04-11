import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../storage.service';
import { ScoresService } from "../../scores.service";
import { PlayerInfo } from "../gameScreen.component";
import { concatMap } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { interval } from 'rxjs';
import { Subscription } from 'rxjs';
import { timer } from 'rxjs';

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

export class ScoreScreenComponent implements OnDestroy {
    constructor(
        private _router: Router,
        private _scores: ScoresService,
        private _storage: StorageService) {

        this.externalScores = this._storage.passExternalScores();
        this.assignPlayerInfoToMyScores(this._storage.passScores());
        this._sub$ = timer(0, 30000).pipe(
            concatMap(() => { return this._scores.load() }),
            filter(val => this.doUpdateScores)
        ).subscribe(
            (result) => { console.log("ok"), this.externalScores = result, this.loadHighScores() }
        )
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

    // loadExternalScores() {


    // let valuesArray = [];
    // this._scores.load()
    //     .pipe(
    //         concatMap(val => {
    //             valuesArray.push(val);
    //         })
    //     )
    // }

    public myScores: Array<DisplayedScores> = [];
    public externalScores: Array<DisplayedScores> = [];
    public displayedScores: Array<DisplayedScores> = [];
    public scoreSortCondition: string = "descending";
    public scoreFilterCondition: string = "all";
    public doUpdateScores: boolean = true;
    public hideScores() {
        this._router.navigate(["/game"]);

    };
    private _sub$: Subscription;
    ngOnDestroy() {
        this._sub$.unsubscribe();
    }
}
