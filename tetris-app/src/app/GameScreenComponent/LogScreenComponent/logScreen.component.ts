import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../storage.service';

@Component({
    selector: 'logScreen',
    templateUrl: './logScreen.component.html',
    styleUrls: ['./logScreen.component.css']
})

export class LogScreenComponent {
    public logHistory = [""];
    constructor(
        private _router: Router,
        private _storage: StorageService) {
        this.logHistory = this._storage.passLog();
    }
    public lastEntry: string;
    public gameplayHistory: Array<string> = [];
    public historyHolder: Array<string> = [];
    public sortCondition: string = "toOldest";
    public filterCondition: string = "";



    public hideLog() {
        this._router.navigate(["/game"])

    };
}
