"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var linearIcons_free_1 = require("../../../core/linearIcons-free");
var user_service_1 = require("../../../security/services/user.service");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var MenuOutletComponent = (function () {
    function MenuOutletComponent(_changeDetectionRef, routerExtensions, userService) {
        this._changeDetectionRef = _changeDetectionRef;
        this.routerExtensions = routerExtensions;
        this.userService = userService;
        this.userIcon = linearIcons_free_1.LinearFree.LNR_user;
        this.hamburger = linearIcons_free_1.LinearFree.LNR_menu;
        this.cross = linearIcons_free_1.LinearFree.LNR_cross;
        if (this.userService.isLoggedIn) {
            var _user = this.userService.loginInformation.user;
            if (_user.givenName) {
                this.user = _user.givenName;
                if (!_user.surname) {
                    this.user = _user.name;
                }
                else {
                    this.user += " " + _user.surname;
                }
            }
            else {
                this.user = _user.name;
            }
            if (_user.email) {
                this.email = _user.email;
            }
        }
    }
    MenuOutletComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    MenuOutletComponent.prototype.ngOnInit = function () {
    };
    MenuOutletComponent.prototype.openDrawer = function () {
        this.drawer.showDrawer();
    };
    MenuOutletComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.closeDrawer();
    };
    MenuOutletComponent.prototype.onActivate = function ($event) {
        console.log('activated');
    };
    return MenuOutletComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], MenuOutletComponent.prototype, "drawerComponent", void 0);
MenuOutletComponent = __decorate([
    core_1.Component({
        selector: 'menu-outlet',
        moduleId: module.id,
        templateUrl: './menuoutlet.component.html',
        styleUrls: ['./menuoutlet.component.css']
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef, router_extensions_1.RouterExtensions, user_service_1.UserService])
], MenuOutletComponent);
exports.MenuOutletComponent = MenuOutletComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudW91dGxldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51b3V0bGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1FQUE0RDtBQUU1RCx3RUFBc0U7QUFDdEUsbUZBQWlGO0FBQ2pGLHNDQUEyRztBQUkzRyxzRUFBb0c7QUFVcEcsSUFBYSxtQkFBbUI7SUFPOUIsNkJBQW9CLG1CQUFzQyxFQUFVLGdCQUFrQyxFQUFVLFdBQXdCO1FBQXBILHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFKakksYUFBUSxHQUFHLDZCQUFVLENBQUMsUUFBUSxDQUFDO1FBQy9CLGNBQVMsR0FBRyw2QkFBVSxDQUFDLFFBQVEsQ0FBQztRQUNoQyxVQUFLLEdBQUcsNkJBQVUsQ0FBQyxTQUFTLENBQUM7UUFHbEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1lBQ3JELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7Z0JBQzVCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDekIsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixJQUFJLENBQUMsSUFBSSxJQUFJLE1BQUksS0FBSyxDQUFDLE9BQVMsQ0FBQztnQkFDbkMsQ0FBQztZQUNILENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDekIsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDM0IsQ0FBQztRQUNILENBQUM7SUFFSCxDQUFDO0lBS0QsNkNBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxzQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUNNLHdDQUFVLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU0sOENBQWdCLEdBQXZCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsd0NBQVUsR0FBVixVQUFXLE1BQU07UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFqREQsSUFpREM7QUF0Qm9DO0lBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7OEJBQXlCLGdDQUFzQjs0REFBQztBQTNCdkUsbUJBQW1CO0lBUC9CLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtRQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztLQUMxQyxDQUFDO3FDQVN5Qyx3QkFBaUIsRUFBNEIsb0NBQWdCLEVBQXVCLDBCQUFXO0dBUDdILG1CQUFtQixDQWlEL0I7QUFqRFksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGluZWFyRnJlZSB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL2xpbmVhckljb25zLWZyZWVcIjtcclxuaW1wb3J0IHsgSVVzZXJSZXNwb25zZSB9IGZyb20gXCIuLi8uLi8uLi9zZWN1cml0eS9pbnRlcmZhY2VzL2l1c2VyLXJlc3BvbnNlXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3NlY3VyaXR5L3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9uc1wiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25JdGVtIH0gZnJvbSBcInVpL2FjdGlvbi1iYXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWVudS1vdXRsZXQnLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21lbnVvdXRsZXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21lbnVvdXRsZXQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWVudU91dGxldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgcHVibGljIHVzZXI6IHN0cmluZztcclxuICBwdWJsaWMgZW1haWw6IHN0cmluZztcclxuICBwdWJsaWMgdXNlckljb24gPSBMaW5lYXJGcmVlLkxOUl91c2VyO1xyXG4gIHB1YmxpYyBoYW1idXJnZXIgPSBMaW5lYXJGcmVlLkxOUl9tZW51O1xyXG4gIHB1YmxpYyBjcm9zcyA9IExpbmVhckZyZWUuTE5SX2Nyb3NzO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7XHJcbiAgICBpZiAodGhpcy51c2VyU2VydmljZS5pc0xvZ2dlZEluKSB7XHJcbiAgICAgIGNvbnN0IF91c2VyID0gdGhpcy51c2VyU2VydmljZS5sb2dpbkluZm9ybWF0aW9uLnVzZXI7XHJcbiAgICAgIGlmIChfdXNlci5naXZlbk5hbWUpIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSBfdXNlci5naXZlbk5hbWU7XHJcbiAgICAgICAgaWYgKCFfdXNlci5zdXJuYW1lKSB7XHJcbiAgICAgICAgICB0aGlzLnVzZXIgPSBfdXNlci5uYW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnVzZXIgKz0gYCAke191c2VyLnN1cm5hbWV9YDtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy51c2VyID0gX3VzZXIubmFtZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoX3VzZXIuZW1haWwpIHtcclxuICAgICAgICB0aGlzLmVtYWlsID0gX3VzZXIuZW1haWw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG4gIHByaXZhdGUgZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XHJcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gIH1cclxuICBwdWJsaWMgb3BlbkRyYXdlcigpIHtcclxuICAgIHRoaXMuZHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkNsb3NlRHJhd2VyVGFwKCkge1xyXG4gICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcclxuICB9XHJcblxyXG4gIG9uQWN0aXZhdGUoJGV2ZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZygnYWN0aXZhdGVkJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==