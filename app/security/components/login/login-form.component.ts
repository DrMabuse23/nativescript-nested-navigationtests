import { IUser } from '../../models/User';
import { UserService } from '../../services/user.service';
import { LinearFree } from '../../../core/linearIcons-free';
import { RouterExtensions } from 'nativescript-angular/router';
import { Http } from '@angular/http';
import { Color } from 'tns-core-modules/color';
import { Page } from 'tns-core-modules/ui/page';
import { View } from 'tns-core-modules/ui/core/view';
import { ActivityIndicator } from "ui/activity-indicator";
import { Component, OnInit, QueryList, ViewChildren, ElementRef, AfterContentInit } from '@angular/core';
import * as elementRegistryModule from 'nativescript-angular/element-registry';
elementRegistryModule.registerElement("CardView", () => require("nativescript-cardview").CardView);

declare var CGSizeMake: any;

@Component({
  selector: 'login-form',
  moduleId: module.id,
  templateUrl: 'login-form.component.html',
  styleUrls: ['./login-form.css']
})

export class LoginComponent {
  form: IUser;
  onLoginProcess = false;

  @ViewChildren('shadowItem') childChildren: QueryList<ElementRef>
  public fabIcon = LinearFree.LNR_home;

  constructor(private page: Page, private userService: UserService, private routerExtensions: RouterExtensions) {
    this.form = {
      userName: 'blubber',
      password: 'hannes'
    };
  }

  formIsValid() {
    let valid = false;
    if (this.form.userName.length && this.form.password.length) {
      valid = true;
    }
    return valid;
  }

  submit($event) {
    this.userService.isLoggedIn = false;
    this.userService.userName = 'blubber';
    this.userService.password = 'foobar';

    return this.routerExtensions.navigate(
    ['home'],
    {
      clearHistory: true,
      
    });
    // if (this.formIsValid() && $event === 'touched' && !this.onLoginProcess) {
    //   this.onLoginProcess = true;

    //   this.userService.authenticate(this.form.userName, this.form.password)
    //     .subscribe(
    //     (res) => {
    //       console.log('logged in', res);
    //     },
    //     e => { // error dude
    //       this.onLoginProcess = false;
    //       console.error(e)
    //     },
    //     () => { // complete
    //       this.onLoginProcess = false;
    //       // {outlets: { mainOutlet: ['loggedIn'] }}
    //       this.routerExtensions.navigate(
    //         ['home'],
    //         {
    //           clearHistory: true,
              
    //         });
    //     }
    //     );
    // } else {
    //   console.log('not valid');
    // }

  }
}
