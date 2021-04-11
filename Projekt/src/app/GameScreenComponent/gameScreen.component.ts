import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { ScoresService } from "../scores.service"


export interface PlayerInfo {
    name: string; id: string; points?: number;
}
@Component({
    selector: 'gameScreen',
    templateUrl: './gameScreen.component.html',
    styleUrls: ['./gameScreen.component.css']
})


export class GameScreenComponent {



    public playerInfo: { name: string, id: string, points?: number };

    constructor(
        private _router: Router,
        private _storage: StorageService,
        private _scores: ScoresService) {
        this.playerInfo = this._storage.passPlayerInfo();
        this.logHistory = this._storage.passLog();
        this.myScores = this._storage.passScores();
    }

    public logScreenVisibility: boolean = false;

    public points: number = 0;
    public status: string = "not started";

    public timePassed: number = 0;
    public interval: any;


    startTimer() {
        this.pauseTimer();
        this.interval = setInterval(() => {
            this.timePassed++;
        }, 1000)
    }
    pauseTimer() {
        clearInterval(this.interval);
    }
    resetTimer() {
        this.timePassed = 0;
    }


    public orderNumber: number = 0;
    public logEntry: string;
    public lastAction: string = "";
    public logHistory: Array<string> = [];
    public myScores: Array<PlayerInfo>;

    public dateWithZero(date: string) {
        if (date.charAt(1) === "")
            return "0" + date;
        else
            return date

    };
    public addToHistory(action: string) {
        let logEntry: string;
        if (action !== this.lastAction) {
            this.orderNumber++;
            let currentDate = new Date();
            logEntry =
                currentDate.getFullYear().toString() + "-"
                + this.dateWithZero((currentDate.getMonth() + 1).toString()) + "-"
                + this.dateWithZero(currentDate.getDate().toString()) + " "
                + this.dateWithZero(currentDate.getHours().toString()) + ":"
                + this.dateWithZero(currentDate.getMinutes().toString()) + ":"
                + this.dateWithZero(currentDate.getSeconds().toString()) + " - "
                + action;
            this.logHistory.push(logEntry)
            this.lastAction = action;
        }
    }

    public showLog() {
        this._router.navigate(["/log"])
        this._storage.takeLog(this.logHistory);
    };

    public showScores() {
        this._router.navigate(["/scores"])
    };

    public playerExit() {
        this._router.navigate(["/welcome"])
        this._storage.takeLog([]);
        this.addToMyScores(this.playerInfo, this.points);
        // this._scores.postScores(this.playerInfo.name, this.points).subscribe(result => {
        //     console.log(result);
        // })

    };

    public addToMyScores(givenInfo: PlayerInfo, points: number) {
        this.myScores.push({ name: givenInfo.name, id: givenInfo.id, points: points })
        this._storage.takeMyScores(this.myScores);
    }

    public addPoints() { this.points = this.points + 100, this.addToHistory("Line cleared") };
    public startGame() { this.status = "active", this.addToHistory("Game started"), this.startTimer() };
    public pauseGame() { this.status = "paused", this.addToHistory("Game paused"), this.pauseTimer() };
    public resetGame() { this.resetTimer(), this.addToHistory("Game reset"), this.addToMyScores(this.playerInfo, this.points); };
    public stateNumber: number = 2;

    public hideLog(logVisibility: boolean) {
        this.logScreenVisibility = logVisibility;
    }

}
