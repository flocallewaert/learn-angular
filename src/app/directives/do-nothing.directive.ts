import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appDoNothing="test"]',
  inputs:['text:logText']
})
export class DoNothingDirective{
    @Input('otherText') // otherTxt: string;
    set otherText(
        value: string
    ) {
        console.log(value);
    }

    constructor(
    ) {
        console.log('do nothing');
    }

    set text(
        value
    ) {
        console.log(value);
    }
}
