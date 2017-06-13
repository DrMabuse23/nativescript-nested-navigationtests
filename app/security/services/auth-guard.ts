import { UserService } from './user.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

/**
 * handle on subroutes the canENter auth
 * ```js
 * import { AuthGuard } from '../security/services/auth-guard';
 * import { DevicesComponent } from './components/devices/devices.component';
 * import { Routes } from '@angular/router';
 *
 * export const devicesRoutes: Routes = [
 *  { path: "devices", component: DevicesComponent, canActivate: [AuthGuard] }
 * ];
 * ```
 * @export
 * @class AuthGuard
 * @implements {CanActivate}
 */
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private routerExtensions: RouterExtensions) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.userService.isLoggedIn) {
      console.log(`user is logged in welcome to your route ${JSON.stringify(route.params, null, 2)}`)
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.routerExtensions.navigate(['/login'], {
      clearHistory: true,
      queryParams: {
        returnUrl: state.url || 'nope'
      }
    });
    return false;
  }
}
