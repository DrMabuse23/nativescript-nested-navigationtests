"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("./user.service");
var router_1 = require("nativescript-angular/router");
var core_1 = require("@angular/core");
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
var AuthGuard = (function () {
    function AuthGuard(userService, routerExtensions) {
        this.userService = userService;
        this.routerExtensions = routerExtensions;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.userService.isLoggedIn) {
            console.log("user is logged in welcome to your route " + JSON.stringify(route.params, null, 2));
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
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.RouterExtensions])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGgtZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQ0FBNkM7QUFDN0Msc0RBQStEO0FBQy9ELHNDQUEyQztBQUczQzs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUVILElBQWEsU0FBUztJQUVwQixtQkFBb0IsV0FBd0IsRUFBVSxnQkFBa0M7UUFBcEUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUksQ0FBQztJQUU3RiwrQkFBVyxHQUFYLFVBQVksS0FBNkIsRUFBRSxLQUEwQjtRQUNuRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2Q0FBMkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUcsQ0FBQyxDQUFBO1lBQy9GLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQ0QsOERBQThEO1FBQzlELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN6QyxZQUFZLEVBQUUsSUFBSTtZQUNsQixXQUFXLEVBQUU7Z0JBQ1gsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLElBQUksTUFBTTthQUMvQjtTQUNGLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBbEJELElBa0JDO0FBbEJZLFNBQVM7SUFEckIsaUJBQVUsRUFBRTtxQ0FHc0IsMEJBQVcsRUFBNEIseUJBQWdCO0dBRjdFLFNBQVMsQ0FrQnJCO0FBbEJZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQ2FuQWN0aXZhdGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuLyoqXHJcbiAqIGhhbmRsZSBvbiBzdWJyb3V0ZXMgdGhlIGNhbkVOdGVyIGF1dGhcclxuICogYGBganNcclxuICogaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi4vc2VjdXJpdHkvc2VydmljZXMvYXV0aC1ndWFyZCc7XHJcbiAqIGltcG9ydCB7IERldmljZXNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGV2aWNlcy9kZXZpY2VzLmNvbXBvbmVudCc7XHJcbiAqIGltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbiAqXHJcbiAqIGV4cG9ydCBjb25zdCBkZXZpY2VzUm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAqICB7IHBhdGg6IFwiZGV2aWNlc1wiLCBjb21wb25lbnQ6IERldmljZXNDb21wb25lbnQsIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSB9XHJcbiAqIF07XHJcbiAqIGBgYFxyXG4gKiBAZXhwb3J0XHJcbiAqIEBjbGFzcyBBdXRoR3VhcmRcclxuICogQGltcGxlbWVudHMge0NhbkFjdGl2YXRlfVxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cclxuXHJcbiAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KSB7XHJcbiAgICBpZiAodGhpcy51c2VyU2VydmljZS5pc0xvZ2dlZEluKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGB1c2VyIGlzIGxvZ2dlZCBpbiB3ZWxjb21lIHRvIHlvdXIgcm91dGUgJHtKU09OLnN0cmluZ2lmeShyb3V0ZS5wYXJhbXMsIG51bGwsIDIpfWApXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy8gbm90IGxvZ2dlZCBpbiBzbyByZWRpcmVjdCB0byBsb2dpbiBwYWdlIHdpdGggdGhlIHJldHVybiB1cmxcclxuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9sb2dpbiddLCB7XHJcbiAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcclxuICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICByZXR1cm5Vcmw6IHN0YXRlLnVybCB8fCAnbm9wZSdcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==