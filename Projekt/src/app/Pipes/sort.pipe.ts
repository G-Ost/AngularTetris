import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "sortPipe"
})


export class sortPipe implements PipeTransform {
    transform(logs: Array<string>, condition: string) {
        let filteredArray = logs;
        if (condition === "toNewest") {
            filteredArray = filteredArray.reverse()
        } else {
            filteredArray = filteredArray.reverse()
        }
        return filteredArray;
    }
}

