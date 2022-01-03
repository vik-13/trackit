import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appTime',
  pure: true
})
export class TimePipe implements PipeTransform {
  transform(value: number): string {
    const h = Math.floor(value / 3600);
    const m = Math.floor((value - (h * 3600)) / 60);
    const s = Math.floor((value - (h * 3600) - (m * 60)));
    let result = '';

    if (h) {
      result += (h + 'h');
    }

    if (m || h) {
      result += ((h ? ' ' : '') + (m + 'm'));
    }

    result += ((h || m ? ' ' : '') + (s + 's'));

    return result;
  }
}
