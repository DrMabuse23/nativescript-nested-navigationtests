import {TKIfIOSDirective} from './directives/platform.directives';
import {TKIfAndroidDirective} from './directives/platform.directives';
import { FontIconPipe } from './pipes/font-icon.pipe';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptUISideDrawerModule } from 'nativescript-telerik-ui/sidedrawer/angular';
import { MenuOutletComponent } from './components/menuoutlet/menuoutlet.component';
import { MeterPipe } from './pipes/meter.pipe';
import { FabBtnComponent } from './components/fab-button.component';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptUIListViewModule } from "nativescript-telerik-ui/listview/angular";
import { NgStringPipesModule } from 'angular-pipes';

const components = [
  FabBtnComponent,
  MenuOutletComponent
];
const directives = [
  TKIfAndroidDirective,
  TKIfIOSDirective
];
const pipes = [
  MeterPipe,
  FontIconPipe
];

@NgModule({
  imports: [
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
  ]
})
export class SharedModule { }
