import { Component, Output, EventEmitter, Input } from '@angular/core';
@Component({
    selector: 'welcomeScreen',
    templateUrl: './welcomeScreen.component.html',
    styleUrls: ['./welcomeScreen.component.css']
})
export class WelcomeScreenComponent {

    public playerInfo = { name: "", email: "" }

    @Output() startGame = new EventEmitter();
    @Output() passPlayerData = new EventEmitter();
}
