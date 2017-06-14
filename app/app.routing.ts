import {WelcomeLoginComponent} from "./app-components/welcome-login/welcome.component";
import {HelpComponent} from "./app-components/help/help.component";
import {LoginComponent} from "./app-components/login/login.component";
import {WelcomeComponent} from "./app-components/welcome/welcome.component";
import {HomeComponent} from "./app-components/home/home.component";
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

const routes: Routes = [
     {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    { 
        path: "login", 
        component: LoginComponent
    },
    {
        path: "home",
        component: HomeComponent,
        children: [
            { path: '', component: WelcomeComponent },
            
            { path: 'loggedIn', component: WelcomeLoginComponent },
            { path: "help", component: HelpComponent },
        ]
    },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }