import { AuthGuard } from './services/auth-guard';
import { UserService } from './services/user.service';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { SharedModule } from '../shared/shared.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { LoginComponent } from './components/login/login-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const components = [
  LoginComponent
];

@NgModule({
  imports: [
    CommonModule,
    NativeScriptModule,
    SharedModule,
    NativeScriptFormsModule
  ],
  declarations: [
    ...components
  ],
  exports: [
    CommonModule,
    NativeScriptModule,
    SharedModule,
    NativeScriptFormsModule,
    ...components
  ],
  providers: [
    UserService,
    AuthGuard
  ]
})
export class SecurityModule { }
