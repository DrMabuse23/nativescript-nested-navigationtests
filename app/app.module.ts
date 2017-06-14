import {WelcomeLoginComponent} from "./app-components/welcome-login/welcome.component";
import { MainActionBarComponent } from "./common-components/actionbar.component";
import { DrawerService } from "./services/drawer.service";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptUISideDrawerModule } from 'nativescript-telerik-ui/sidedrawer/angular';
import { LoginComponent } from "./app-components/login/login.component";
import { HelpComponent } from "./app-components/help/help.component";
import { HomeComponent } from "./app-components/home/home.component";
import { WelcomeComponent } from "./app-components/welcome/welcome.component";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

export const APP_COMPONENTS: any[] = [
    WelcomeComponent,
    AppComponent,
    HomeComponent,
    HelpComponent,
    LoginComponent,
    ItemsComponent,
    ItemDetailComponent,
    MainActionBarComponent,
    WelcomeLoginComponent
];

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptUISideDrawerModule,
        AppRoutingModule
    ],
    declarations: [
        ...APP_COMPONENTS
    ],
    providers: [
        ItemService,
        DrawerService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
