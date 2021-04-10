import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "filterPipe"
})


export class filterPipe implements PipeTransform {
    transform(logs: Array<string>, condition: string) {
        let filteredArray = [];
        for (let log of logs) {
            if (log.match(condition)) {
                filteredArray.push(log);
            }
        }
        return filteredArray;
    }
}

