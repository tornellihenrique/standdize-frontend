import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'intervalFromNow',
})
export class IntervalFromNowPipe implements PipeTransform {
  transform(value: Date | undefined | null, ...args: unknown[]): string {
    if (!value) return '';

    const date = new Date(value);

    if (!date) return '';

    return moment(date).fromNow();
  }
}
