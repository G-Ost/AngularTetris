import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'welcomeScreen',
    templateUrl: './welcomeScreen.component.html',
    styleUrls: ['./welcomeScreen.component.css']
})
export class WelcomeScreenComponent implements OnChanges {
    public name: string = "";
    public email: string;
    public isWelcomeVisible: string = "visible";
    public isGameVisible: string = "hidden";
    public setPlayer(name: string = "", email: string = "") {
        let letters = /^[A-Za-z]+$/;
        if (name.length === 0) {
            alert("Please fill name section!")
            return;
        }
        else if (name.indexOf(" ") !== -1) {
            alert("No spaces in name, please!")
            return;
        }
        else if (!name.match(letters)) {
            alert("Only letters allowed for name!")
            return;
        }
        else { this.name = name; }

        if (email.length === 0) {
            alert("Please fill e-mail section!")
            return;
        }
        else if (email.indexOf(" ") !== -1) {
            alert("No spaces in e-mail, please!")
            return;
        }
        else if (email.indexOf("@") === -1 || email.indexOf("@") === 0 || email.indexOf("@") === email.length - 1 ||
            email.indexOf(".") === -1 || email.indexOf(".") === 0 || email.indexOf(".") === email.length - 1) {
            alert("Wrong e-mail format!")
            return
        }
        else {
            this.email = email;
        }
        this.isWelcomeVisible = "hidden";
        this.isGameVisible = "visible";
        console.log("xdd")

    }
    @Output() passPlayerData = new EventEmitter();
    @Input() stateNumber: number;
    public checkVisibility(state: number) {
        if (state % 2 === 1) {
            this.isWelcomeVisible = "hidden"
        }
        else {
            this.isWelcomeVisible = "visible";
            this.name = "";
            this.email = "";
            this.isGameVisible = "hidden";
        }
    }
    ngOnChanges() {
        this.checkVisibility(this.stateNumber);
    }
}
