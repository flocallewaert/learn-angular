import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercaseEven'
})
export class UppercaseEvenPipe implements PipeTransform {

    transform(value: any, args?: any): any {

        // return value.split().reduce((result, letter, index) => {
        //     if (
        //         0 === (index % 2)
        //     ) {
        //         letter = letter.toUpperCase();
        //     }
        //     result += letter;
        // });

        const tab: string[] = [];
        for (
            let index = 0, len = value.length;
            index < len;
            index++
        ) {
            const letter = value[index];
            if (
                0 === (index % 2)
            ) {
                tab.push(letter.toUpperCase());
            } else {
                tab.push(letter);
            }
        }
        return tab.join('');
    }
}
