import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandSuffix',
})
export class ThousandSuffixesPipe implements PipeTransform {
  transform(ups: number): string {
    const suffixes = ['k', 'M', 'G', 'T', 'P', 'E'];
    if (ups < 1000) {
      return ups.toFixed(0);
    }
    const exp = Math.floor(Math.log(ups) / Math.log(1000));
    return (ups / Math.pow(1000, exp)).toFixed(1) + suffixes[exp - 1];
  }
}
