import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'gameScreen',
    templateUrl: './gameScreen.component.html',
    styleUrls: ['./gameScreen.component.css']
})
export class GameScreenComponent {
    public name: string;
    public email: string;
    public isGameVisible: string;
    public isWelcomeVisible: string = "visible";
    public logVisibility = "hidden";
    @Input() public set playerData(data) {
        this.name = data.split(',')[0]
        this.email = data.split(',')[1]
        this.isGameVisible = data.split(',')[2]
    }
    public points: number = 0;
    public status: string = "not started";

    //

    public timePassed: number = 0;
    public interval;

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
    //

    public orderNumber: number = 0;
    public logEntry: string;
    public lastAction: string = "";

    public dateWithZero(date: string) {
        if (date.charAt(1) === "")
            return "0" + date;
        else
            return date

    };
    public addToHistory(action: string) {
        if (action !== this.lastAction) {
            this.orderNumber++;
            let currentDate = new Date();
            this.logEntry =
                + currentDate.getFullYear().toString() + "-"
                + this.dateWithZero((currentDate.getMonth() + 1).toString()) + "-"
                + this.dateWithZero(currentDate.getDate().toString()) + " "
                + this.dateWithZero(currentDate.getHours().toString()) + ":"
                + this.dateWithZero(currentDate.getMinutes().toString()) + ":"
                + this.dateWithZero(currentDate.getSeconds().toString()) + " - "
                + action;
            this.lastAction = action;
        }


    }

    public addPoints() { this.points = this.points + 100, this.addToHistory("Line cleared") };
    public startGame() { this.status = "active", this.addToHistory("Game started"), this.startTimer() };
    public pauseGame() { this.status = "paused", this.addToHistory("Game paused"), this.pauseTimer() };
    public resetGame() { this.resetTimer(), this.addToHistory("Game reset") };
    public stateNumber: number = 2;

    public showLog() {
        this.logVisibility = "visible";
    }
    public hideLog() {
        this.logVisibility = "hidden";
    }
    public exitGame() {
        this.isGameVisible = "hidden", this.stateNumber = this.stateNumber + 2;
    }

    @Output() playerExit = new EventEmitter();
}
