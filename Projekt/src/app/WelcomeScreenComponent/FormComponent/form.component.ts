import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'formComponent',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})

export class Form {
    @Output() passPlayerData = new EventEmitter();
    public playerInfo = { name: "", id: "" }


}