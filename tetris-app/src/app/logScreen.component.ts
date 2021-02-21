import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'logScreen',
    templateUrl: './logScreen.component.html',
    styleUrls: ['./logScreen.component.css']
})

export class LogScreenComponent {
    public lastEntry: string;
    public gameplayHistory: Array<string> = [];
    public historyHolder: Array<string> = [];
    public sortCondition: string = "toOldest";
    public filterCondition: string = "";

    @Input() logHistory: Array<string>;
    @Output() hideLog = new EventEmitter();
}
