import { LinearFree } from './linearIcons-free';
import { Injectable, Pipe } from '@angular/core';

@Injectable()
export class FontService {
  public lnr = LinearFree;

  getIcon(icon, font = LinearFree) {
    if (!font[icon]) {
      console.log(`item ${icon} not found`);
      return icon;
    }
    const _icon = font[icon];
    console.log(`get item ${_icon}`);
    return String.fromCharCode(_icon);
  }
}
