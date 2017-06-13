import {DeviceComponent} from './components/device/device.component';
import {DevicesComponent} from './components/devices/devices.component';
import { NgModule } from '@angular/core';

const components = [
  DevicesComponent,
  DeviceComponent
];

@NgModule({
  imports: [],
  exports: [],
  declarations: [
    ...components
  ],
  providers: [],
})
export class DevicesModule { }
