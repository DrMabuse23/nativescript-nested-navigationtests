import {BeaconScannerComponent} from "./scanner/components/beaconscanner/beaconscanner.component";
import {DeviceComponent} from "./devices/components/device/device.component";
import { DevicesComponent } from "./devices/components/devices/devices.component";
import { MenuOutletComponent } from "./shared/components/menuoutlet/menuoutlet.component";
import { LoginComponent } from "./security/components/login/login-form.component";
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";


const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "home",
    component: MenuOutletComponent,
    children: [
      { path: "", component: DevicesComponent },
      { 
        path: "devices", 
        component: DevicesComponent,
        children: [
          { path: "", component: DevicesComponent },
          { path: "device/:deviceId", component: DeviceComponent },
        ]
      },
      { 
        path: "scanner", 
        component: BeaconScannerComponent
      },
    ]
  },

];

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot(routes)
  ],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }