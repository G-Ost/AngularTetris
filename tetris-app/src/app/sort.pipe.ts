import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "sortPipe"
})
export class sortPipe implements PipeTransform {
    transform(entry: string, condition: string) {
        let matches = entry.match(condition)
        if (matches !== null) {
            return entry
        }

    }
}