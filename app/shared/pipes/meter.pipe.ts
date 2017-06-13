import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meter'
})
export class MeterPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const _nValue = Number(value);
    if (_nValue === NaN) {
      console.warn('value have to be typeof Number');
      return value;
    }
    return `${Math.round(_nValue * 100) / 100} m`;
  }
}
