import {ApplicationBarHelper} from './applicationbar.service';
import { FontService } from './font.service';
import { EnvironmentService } from './environment.service';
import { MinLengthDirective, IsEmailDirective } from './validators.directive';
import { ErrorHandler } from '@angular/core';
import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptAnimationsModule } from "nativescript-angular/animations";
import { HttpLambdaService } from './http-lambda.service';
import { Http, RequestOptions, XHRBackend, HttpModule } from '@angular/http';
import { NativeScriptHttpModule } from "nativescript-angular/http";

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

const providers = [
  {
    provide: Http,
    useFactory: lambda,
    deps: [XHRBackend, RequestOptions]
  },
  { provide: ErrorHandler, useClass: MyErrorHandler },
  EnvironmentService,
  FontService,
  ApplicationBarHelper
];

const directives = [
  MinLengthDirective,
  IsEmailDirective
];

@NgModule({
  imports: [
    CommonModule,
    NativeScriptHttpModule,
    NativeScriptAnimationsModule,
    NativeScriptFormsModule
  ],
  declarations: [
    ...directives
  ],
  exports: [
    CommonModule,
    NativeScriptHttpModule,
    NativeScriptAnimationsModule,
    NativeScriptFormsModule
  ],
  providers: [...providers]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(): ModuleWithProviders {
    return { ngModule: CoreModule, providers: [...providers] };
  }
}
