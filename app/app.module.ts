import {BeaconScannerModule} from "./scanner/scanner.module";
import {DevicesModule} from "./devices/devices.module";
import {SecurityModule} from "./security/security.module";
import {CoreModule} from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import 'rxjs/Rx';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        CoreModule.forRoot(),
        SharedModule,
        SecurityModule,
        DevicesModule,
        BeaconScannerModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [ ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
