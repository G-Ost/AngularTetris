import { Component, Input } from '@angular/core';

@Component({
    selector: 'gameInfo',
    templateUrl: './gameInfo.component.html',
    styleUrls: ['./gameInfo.component.css']
})

export class GameInfoComponent {
    @Input() playerInfo: { name: string, id: string, points: number, status: string, timePassed: number };

}

