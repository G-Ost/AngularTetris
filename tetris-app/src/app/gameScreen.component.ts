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
    @Input() public set playerData(data) {
        this.name = data.split(',')[0]
        this.email = data.split(',')[1]
        this.isGameVisible = data.split(',')[2]
    }
    public points: number = 0;
    public status: string = "not started";
    public addPoints() { this.points = this.points + 100 };
    public startGame() { this.status = "active" };
    public pauseGame() { this.status = "paused" };
    public resetGame() { this.status = "not started" };
    public counter: number = 0;
    public exitGame() { this.isGameVisible = "hidden", this.isWelcomeVisible = "visible", this.counter++ }

    @Output() playerExit = new EventEmitter();
}
