import {SharedModule} from '../shared/shared.module';
import {BeaconScannerComponent} from './components/beaconscanner/beaconscanner.component';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [SharedModule],
  declarations: [BeaconScannerComponent],
  providers: [],
})
export class BeaconScannerModule { }
