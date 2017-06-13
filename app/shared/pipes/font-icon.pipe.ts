import { FontService } from '../../core/font.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icon'
})

export class FontIconPipe implements PipeTransform {
  constructor(private fontService: FontService) {

  }
  transform(value: any, ...args: any[]): any {
    return String.fromCharCode(value);
  }
}
