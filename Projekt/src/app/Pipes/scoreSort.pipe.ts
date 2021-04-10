import { Pipe, PipeTransform } from '@angular/core';
import { Scores } from "../scores.service"
@Pipe({
    name: "scoreSortPipe"
})


export class scoreSortPipe implements PipeTransform {
    compareNumbers(a, b) {
        return b.score - a.score;
    }
    transform(scores: Array<Scores>, condition: string) {
        let filteredArray = scores.sort(this.compareNumbers).slice(0, 10);
        if (condition === "ascending") {
            filteredArray = filteredArray.reverse();
        }
        return filteredArray;
    }
}

