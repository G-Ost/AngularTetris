import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'logScreen',
    templateUrl: './logScreen.component.html',
    styleUrls: ['./logScreen.component.css']
})

export class LogScreenComponent implements OnChanges {
    public lastEntry: string;
    public gameplayHistory: Array<string> = [];
    public historyHolder: Array<string> = [];
    public isLogVisible: string = "hidden";
    public condition: string = "";
    @Input() logEntry: string;
    @Input() logVisibility: string;



    public updateLog(newEntry: string) {
        this.lastEntry = newEntry;
        this.gameplayHistory.push(this.lastEntry);
    }

    public setVisibility(visibility) {
        this.isLogVisible = visibility;
    }

    public filter(givenCondition) {
        this.condition = givenCondition;
    }

    ngOnChanges(changes) {
        if (changes.logEntry)
            this.updateLog(this.logEntry);
        if (changes.logVisibility) {
            this.setVisibility(this.logVisibility)
        }
    };
}
