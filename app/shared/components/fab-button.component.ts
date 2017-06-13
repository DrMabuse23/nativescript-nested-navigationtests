import { Color } from 'tns-core-modules/color';
import { EventEmitter, Input, Component, Output } from '@angular/core';

declare const CGSizeMake: any;
declare const android: any;
@Component({
  moduleId: module.id,
  selector: 'FabButton',
  templateUrl: './fab-button.component.html',
  styles: [
    `
    .fab-btn-shadow {
      margin-top: -12px;
    }
    .fab-btn {
      border-radius: 50%;
      width:56;
      color: white;
      height:56;
      margin: 20px;
      background-color: #29323c;
      font-size: 24;
    }
    .fab-btn-shadow {
      min-height: 65;
    }
    .fab-btn.small {
      width:40;
      height:40;
      font-size: 18;
    }
    .fab-btn.down {
      animation-name: down;
      animation-duration: 0.2s;
      animation-fill-mode: forwards;
    }
    .fab-btn-text {
      color:#fff;
      font-size: 36;
      margin-top:-4;
    }
    @keyframes down {
      from { background-color: #29323c; }
      to { background-color: #485563;  }
    }
  `
  ]
})
export class FabBtnComponent {
  private _icon: any = '';
  private _className: string = '';

  @Input() set icon(name) {
    this._icon = String.fromCharCode(name);
  }

  get icon() {
    return this._icon;
  }

  @Input() set className(className: string) {
    this._className = className;
  }

  get className() {
    return this._className;
  }

  @Output() submit: EventEmitter<string> = new EventEmitter(true);

  constructor() { }

  public onLoaded(args) {
    let tnsView = <any>args.object; //This is the outer StackLayout
    if (tnsView.android) {
      let nativeAnView = tnsView.android;
      var shape = new android.graphics.drawable.GradientDrawable();
      shape.setShape(android.graphics.drawable.GradientDrawable.OVAL);
      shape.setColor(android.graphics.Color.parseColor('#30bcff'));
      nativeAnView.setBackgroundDrawable(shape);
      nativeAnView.setElevation(20);
    } else if (tnsView.ios) {
      let nativeView = tnsView.ios;
      nativeView.layer.shadowColor = new Color('#888888').ios.CGColor;
      nativeView.layer.shadowOffset = CGSizeMake(0, 2.0);
      nativeView.layer.shadowOpacity = 0.5;
      nativeView.layer.shadowRadius = 5.0;
    }
  }

  public onTouch(args) {
    let theBtn = args.view;
    this.submit.emit('touched');
    theBtn.className = args.action === 'down' ? `fab-btn down ${this.className}` : `fab-btn ${this.className}`
  }
}
