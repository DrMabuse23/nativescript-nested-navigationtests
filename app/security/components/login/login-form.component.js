"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("../../services/user.service");
var linearIcons_free_1 = require("../../../core/linearIcons-free");
var router_1 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page");
var core_1 = require("@angular/core");
var elementRegistryModule = require("nativescript-angular/element-registry");
elementRegistryModule.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
var LoginComponent = (function () {
    function LoginComponent(page, userService, routerExtensions) {
        this.page = page;
        this.userService = userService;
        this.routerExtensions = routerExtensions;
        this.onLoginProcess = false;
        this.fabIcon = linearIcons_free_1.LinearFree.LNR_home;
        this.form = {
            userName: 'blubber',
            password: 'hannes'
        };
    }
    LoginComponent.prototype.formIsValid = function () {
        var valid = false;
        if (this.form.userName.length && this.form.password.length) {
            valid = true;
        }
        return valid;
    };
    LoginComponent.prototype.submit = function ($event) {
        this.userService.isLoggedIn = false;
        this.userService.userName = 'blubber';
        this.userService.password = 'foobar';
        return this.routerExtensions.navigate(['home'], {
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
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChildren('shadowItem'),
    __metadata("design:type", core_1.QueryList)
], LoginComponent.prototype, "childChildren", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login-form',
        moduleId: module.id,
        templateUrl: 'login-form.component.html',
        styleUrls: ['./login-form.css']
    }),
    __metadata("design:paramtypes", [page_1.Page, user_service_1.UserService, router_1.RouterExtensions])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDREQUEwRDtBQUMxRCxtRUFBNEQ7QUFDNUQsc0RBQStEO0FBRy9ELGlEQUFnRDtBQUdoRCxzQ0FBeUc7QUFDekcsNkVBQStFO0FBQy9FLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBV25HLElBQWEsY0FBYztJQU96Qix3QkFBb0IsSUFBVSxFQUFVLFdBQXdCLEVBQVUsZ0JBQWtDO1FBQXhGLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFMNUcsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFHaEIsWUFBTyxHQUFHLDZCQUFVLENBQUMsUUFBUSxDQUFDO1FBR25DLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFDVixRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFDO0lBQ0osQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDRSxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDM0QsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNmLENBQUM7UUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELCtCQUFNLEdBQU4sVUFBTyxNQUFNO1FBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFckMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQ3JDLENBQUMsTUFBTSxDQUFDLEVBQ1I7WUFDRSxZQUFZLEVBQUUsSUFBSTtTQUVuQixDQUFDLENBQUM7UUFDSCw0RUFBNEU7UUFDNUUsZ0NBQWdDO1FBRWhDLDBFQUEwRTtRQUMxRSxrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLHVDQUF1QztRQUN2QyxTQUFTO1FBQ1QsMkJBQTJCO1FBQzNCLHFDQUFxQztRQUNyQyx5QkFBeUI7UUFDekIsU0FBUztRQUNULDBCQUEwQjtRQUMxQixxQ0FBcUM7UUFDckMsbURBQW1EO1FBQ25ELHdDQUF3QztRQUN4QyxvQkFBb0I7UUFDcEIsWUFBWTtRQUNaLGdDQUFnQztRQUVoQyxjQUFjO1FBQ2QsUUFBUTtRQUNSLFNBQVM7UUFDVCxXQUFXO1FBQ1gsOEJBQThCO1FBQzlCLElBQUk7SUFFTixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBN0RELElBNkRDO0FBekQ2QjtJQUEzQixtQkFBWSxDQUFDLFlBQVksQ0FBQzs4QkFBZ0IsZ0JBQVM7cURBQVk7QUFKckQsY0FBYztJQVAxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVk7UUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSwyQkFBMkI7UUFDeEMsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7S0FDaEMsQ0FBQztxQ0FTMEIsV0FBSSxFQUF1QiwwQkFBVyxFQUE0Qix5QkFBZ0I7R0FQakcsY0FBYyxDQTZEMUI7QUE3RFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy9Vc2VyJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMaW5lYXJGcmVlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9saW5lYXJJY29ucy1mcmVlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2NvbG9yJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlldyc7XHJcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSBcInVpL2FjdGl2aXR5LWluZGljYXRvclwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgUXVlcnlMaXN0LCBWaWV3Q2hpbGRyZW4sIEVsZW1lbnRSZWYsIEFmdGVyQ29udGVudEluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgZWxlbWVudFJlZ2lzdHJ5TW9kdWxlIGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xyXG5lbGVtZW50UmVnaXN0cnlNb2R1bGUucmVnaXN0ZXJFbGVtZW50KFwiQ2FyZFZpZXdcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiKS5DYXJkVmlldyk7XHJcblxyXG5kZWNsYXJlIHZhciBDR1NpemVNYWtlOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xvZ2luLWZvcm0nLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6ICdsb2dpbi1mb3JtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi1mb3JtLmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG4gIGZvcm06IElVc2VyO1xyXG4gIG9uTG9naW5Qcm9jZXNzID0gZmFsc2U7XHJcblxyXG4gIEBWaWV3Q2hpbGRyZW4oJ3NoYWRvd0l0ZW0nKSBjaGlsZENoaWxkcmVuOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj5cclxuICBwdWJsaWMgZmFiSWNvbiA9IExpbmVhckZyZWUuTE5SX2hvbWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xyXG4gICAgdGhpcy5mb3JtID0ge1xyXG4gICAgICB1c2VyTmFtZTogJ2JsdWJiZXInLFxyXG4gICAgICBwYXNzd29yZDogJ2hhbm5lcydcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmb3JtSXNWYWxpZCgpIHtcclxuICAgIGxldCB2YWxpZCA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMuZm9ybS51c2VyTmFtZS5sZW5ndGggJiYgdGhpcy5mb3JtLnBhc3N3b3JkLmxlbmd0aCkge1xyXG4gICAgICB2YWxpZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsaWQ7XHJcbiAgfVxyXG5cclxuICBzdWJtaXQoJGV2ZW50KSB7XHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmlzTG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgIHRoaXMudXNlclNlcnZpY2UudXNlck5hbWUgPSAnYmx1YmJlcic7XHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnBhc3N3b3JkID0gJ2Zvb2Jhcic7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShcclxuICAgIFsnaG9tZSddLFxyXG4gICAge1xyXG4gICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXHJcbiAgICAgIFxyXG4gICAgfSk7XHJcbiAgICAvLyBpZiAodGhpcy5mb3JtSXNWYWxpZCgpICYmICRldmVudCA9PT0gJ3RvdWNoZWQnICYmICF0aGlzLm9uTG9naW5Qcm9jZXNzKSB7XHJcbiAgICAvLyAgIHRoaXMub25Mb2dpblByb2Nlc3MgPSB0cnVlO1xyXG5cclxuICAgIC8vICAgdGhpcy51c2VyU2VydmljZS5hdXRoZW50aWNhdGUodGhpcy5mb3JtLnVzZXJOYW1lLCB0aGlzLmZvcm0ucGFzc3dvcmQpXHJcbiAgICAvLyAgICAgLnN1YnNjcmliZShcclxuICAgIC8vICAgICAocmVzKSA9PiB7XHJcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZygnbG9nZ2VkIGluJywgcmVzKTtcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIGUgPT4geyAvLyBlcnJvciBkdWRlXHJcbiAgICAvLyAgICAgICB0aGlzLm9uTG9naW5Qcm9jZXNzID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICBjb25zb2xlLmVycm9yKGUpXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICAoKSA9PiB7IC8vIGNvbXBsZXRlXHJcbiAgICAvLyAgICAgICB0aGlzLm9uTG9naW5Qcm9jZXNzID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAvLyB7b3V0bGV0czogeyBtYWluT3V0bGV0OiBbJ2xvZ2dlZEluJ10gfX1cclxuICAgIC8vICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShcclxuICAgIC8vICAgICAgICAgWydob21lJ10sXHJcbiAgICAvLyAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICApO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgY29uc29sZS5sb2coJ25vdCB2YWxpZCcpO1xyXG4gICAgLy8gfVxyXG5cclxuICB9XHJcbn1cclxuIl19