import { LinearFree } from "../../../core/linearIcons-free";
import { IUserResponse } from "../../../security/interfaces/iuser-response";
import { UserService } from "../../../security/services/user.service";
import { RouterExtensions } from "nativescript-angular/router/router-extensions";
import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef, ElementRef } from "@angular/core";
import { Page } from "ui/page";
import { ActionItem } from "ui/action-bar";
import { Observable } from "data/observable";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-telerik-ui/sidedrawer';

@Component({
  selector: 'menu-outlet',
  moduleId: module.id,
  templateUrl: './menuoutlet.component.html',
  styleUrls: ['./menuoutlet.component.css']
})

export class MenuOutletComponent implements OnInit, AfterViewInit {
  public user: string;
  public email: string;
  public userIcon = LinearFree.LNR_user;
  public hamburger = LinearFree.LNR_menu;
  public cross = LinearFree.LNR_cross;

  constructor(private _changeDetectionRef: ChangeDetectorRef, private routerExtensions: RouterExtensions, private userService: UserService) {
    if (this.userService.isLoggedIn) {
      const _user = this.userService.loginInformation.user;
      if (_user.givenName) {
        this.user = _user.givenName;
        if (!_user.surname) {
          this.user = _user.name;
        } else {
          this.user += ` ${_user.surname}`;
        }
      } else {
        this.user = _user.name;
      }
      if (_user.email) {
        this.email = _user.email;
      }
    }
    
  }

  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  private drawer: RadSideDrawer;

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this._changeDetectionRef.detectChanges();
  }

  ngOnInit() {

  }
  public openDrawer() {
    this.drawer.showDrawer();
  }

  public onCloseDrawerTap() {
    this.drawer.closeDrawer();
  }

  onActivate($event) {
    console.log('activated');
  }
}
