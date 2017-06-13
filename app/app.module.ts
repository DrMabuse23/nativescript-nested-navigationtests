import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { BeaconScannerComponent } from './scanner/components/beaconscanner/beaconscanner.component';
import { MenuOutletComponent } from './shared/components/menuoutlet/menuoutlet.component';
import { FontIconPipe } from './shared/pipes/font-icon.pipe';
import { HttpLambdaService } from './core/http-lambda.service';
import { EnvironmentService } from './core/environment.service';
import { FontService } from './core/font.service';
import { IsEmailDirective } from './core/validators.directive';
import { MinLengthDirective } from './core/validators.directive';
import { ApplicationBarHelper } from './core/applicationbar.service';
import { FabBtnComponent } from './shared/components/fab-button.component';
import { MeterPipe } from './shared/pipes/meter.pipe';
import { TKIfAndroidDirective } from './shared/directives/platform.directives';
import { TKIfIOSDirective } from './shared/directives/platform.directives';
import { DeviceComponent } from './devices/components/device/device.component';
import { DevicesComponent } from './devices/components/devices/devices.component';
import { LoginComponent } from './security/components/login/login-form.component';
import { AuthGuard } from './security/services/auth-guard';
import { UserService } from './security/services/user.service';


import { ErrorHandler } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptUISideDrawerModule } from 'nativescript-telerik-ui/sidedrawer/angular';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptUIListViewModule } from "nativescript-telerik-ui/listview/angular";
import { NgStringPipesModule } from 'angular-pipes';
import { Http, RequestOptions, XHRBackend, HttpModule } from '@angular/http';
import { NativeScriptHttpModule } from "nativescript-angular/http";
import 'rxjs/Rx';


class MyErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    console.log(`Ups Oh MyErrorHandler say: ${err.message ? err.message : ''}`);
    return err;
  }
}
export function lambda(
  backend: XHRBackend,
  defaultOptions: RequestOptions
) {
  return new HttpLambdaService(backend, defaultOptions);
}

const components = [
  AppComponent,
  FabBtnComponent,
  MenuOutletComponent,
  LoginComponent,
  DevicesComponent,
  DeviceComponent,
  BeaconScannerComponent
];

const directives = [
  TKIfAndroidDirective,
  TKIfIOSDirective,
  MinLengthDirective,
  IsEmailDirective
];

const pipes = [
  MeterPipe,
  FontIconPipe
];

const providers = [
  { provide: ErrorHandler, useClass: MyErrorHandler },
  EnvironmentService,
  FontService,
  ApplicationBarHelper,
  UserService,
  AuthGuard
];

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    HttpModule,
    AppRoutingModule,
    NgStringPipesModule,
    NativeScriptUIListViewModule,
    CommonModule,
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    NativeScriptUISideDrawerModule
  ],
  declarations: [
    ...components,
    ...pipes,
    ...directives
  ],
  exports: [
    NgStringPipesModule,
    NativeScriptUIListViewModule,
    CommonModule,
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    NativeScriptUISideDrawerModule,
    ...components,
    ...pipes,
    ...directives
  ],
  providers: [
    ...providers
  ]
})
export class AppModule { }
