import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "sortPipe"
})


export class sortPipe implements PipeTransform {
    transform(logs: Array<string>, condition: string) {
        let filteredArray = [];
        if (condition = "toNewest") {
            filteredArray = logs.reverse()
        }
        return filteredArray;
    }
}

