import { Component, Output, EventEmitter, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';

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
        else {
            this.email = email;
        }
        this.isWelcomeVisible = "hidden";
        this.isGameVisible = "visible";

    }
    @Output() passPlayerData = new EventEmitter();
    counter: Number;
    counter2: Number;
    visibility2: string;
    public setVisibility(visibility, counter) {
        this.isWelcomeVisible = visibility;
        this.counter = counter;
        this.name = "";
        this.email = "";
    }

    @Input() public set isWelcomeVisible2(data) {
        this.visibility2 = data.split(',')[0]
        this.counter2 = data.split(',')[1]
    }
    ngOnChanges() {
        this.setVisibility(this.visibility2, this.counter2);
    }
}
