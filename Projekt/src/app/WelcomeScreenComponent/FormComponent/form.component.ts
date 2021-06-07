// import { Component, Output, EventEmitter } from '@angular/core';

// @Component({
//     selector: 'formComponent',
//     templateUrl: './form.component.html',
//     styleUrls: ['./form.component.css']
// })

// export class Form {
//     @Output() passPlayerData = new EventEmitter();
//     public playerName = "";
//     public playerId = "";
//     public themeColor = "green";

// }

import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { withLatestFrom } from 'rxjs/operators';
import { StorageService } from '../../storage.service';
@Component({
    selector: 'formComponent',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})

export class Form {
    @Output() passPlayerData = new EventEmitter();

    constructor(
        public fb: FormBuilder,
        private _storage: StorageService) {
        this.playerInfo = _storage.getInfoFromLocalStorage();
        this.buttonColor = this.playerInfo.color === "black-and-white" ? "white" : "rgba(255, 255, 0, 0.486)";
        if (this.playerInfo) {
            this.playerForm.patchValue({
                playerName: this.playerInfo.name,
                themeColor: this.playerInfo.color
            })
        }

        this.playerForm.get("themeColor").valueChanges.subscribe((color) => {
            if (color === "green") {
                this.buttonColor = "rgba(255, 255, 0, 0.486)"
            }
            else {
                this.buttonColor = "white";
            }
        })
    }
    public playerForm = this.fb.group({
        playerName: ["", [Validators.required, Validators.minLength(5)]],
        playerId: ["", [Validators.required, Validators.min(1000), Validators.max(9999)]],
        themeColor: ["green"]
    });

    private playerInfo = { name: "", id: "", color: "green" }
    public buttonColor;

}