import { Pipe, PipeTransform } from '@angular/core';
import { DisplayedScores } from "../GameScreenComponent/ScoreScreenComponent/scoreScreen.component"
@Pipe({
    name: "scoreFilterPipe"
})




export class scoreFilterPipe implements PipeTransform {
    transform(scores: Array<DisplayedScores>, condition: string) {
        let filteredArray = [];
        for (let score of scores) {
            if (score.source === condition || condition === "all") {
                filteredArray.push(score);
            }
        }
        return filteredArray;
    }
}

