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
        this.themeColor = this._storage.passPlayerInfo().color;
    }
    public lastEntry: string;
    public gameplayHistory: Array<string> = [];
    public historyHolder: Array<string> = [];
    public sortCondition: string = "toOldest";
    public filterCondition: string = "";
    public themeColor: string = "green";


    public hideLog() {
        this._router.navigate(["/game", this.themeColor]);
        this._storage.takeLog(this.logHistory);
    };
}

// NAPRAWIĆ: GAME STATUS CZYŚCI SIĘ PO ODPALENIU LOGA