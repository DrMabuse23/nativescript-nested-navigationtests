"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_guard_1 = require("./services/auth-guard");
var user_service_1 = require("./services/user.service");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var shared_module_1 = require("../shared/shared.module");
var forms_1 = require("nativescript-angular/forms");
var login_form_component_1 = require("./components/login/login-form.component");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var components = [
    login_form_component_1.LoginComponent
];
var SecurityModule = (function () {
    function SecurityModule() {
    }
    return SecurityModule;
}());
SecurityModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            nativescript_module_1.NativeScriptModule,
            shared_module_1.SharedModule,
            forms_1.NativeScriptFormsModule
        ],
        declarations: components.slice(),
        exports: [
            common_1.CommonModule,
            nativescript_module_1.NativeScriptModule,
            shared_module_1.SharedModule,
            forms_1.NativeScriptFormsModule
        ].concat(components),
        providers: [
            user_service_1.UserService,
            auth_guard_1.AuthGuard
        ]
    })
], SecurityModule);
exports.SecurityModule = SecurityModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJpdHkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VjdXJpdHkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0RBQWtEO0FBQ2xELHdEQUFzRDtBQUN0RCxnRkFBOEU7QUFDOUUseURBQXVEO0FBQ3ZELG9EQUFxRTtBQUNyRSxnRkFBeUU7QUFDekUsc0NBQXlDO0FBQ3pDLDBDQUErQztBQUUvQyxJQUFNLFVBQVUsR0FBRztJQUNqQixxQ0FBYztDQUNmLENBQUM7QUF3QkYsSUFBYSxjQUFjO0lBQTNCO0lBQThCLENBQUM7SUFBRCxxQkFBQztBQUFELENBQUMsQUFBL0IsSUFBK0I7QUFBbEIsY0FBYztJQXRCMUIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AscUJBQVk7WUFDWix3Q0FBa0I7WUFDbEIsNEJBQVk7WUFDWiwrQkFBdUI7U0FDeEI7UUFDRCxZQUFZLEVBQ1AsVUFBVSxRQUNkO1FBQ0QsT0FBTztZQUNMLHFCQUFZO1lBQ1osd0NBQWtCO1lBQ2xCLDRCQUFZO1lBQ1osK0JBQXVCO2lCQUNwQixVQUFVLENBQ2Q7UUFDRCxTQUFTLEVBQUU7WUFDVCwwQkFBVztZQUNYLHNCQUFTO1NBQ1Y7S0FDRixDQUFDO0dBQ1csY0FBYyxDQUFJO0FBQWxCLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoLWd1YXJkJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi1mb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0gW1xyXG4gIExvZ2luQ29tcG9uZW50XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgIFNoYXJlZE1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIC4uLmNvbXBvbmVudHNcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgIFNoYXJlZE1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgLi4uY29tcG9uZW50c1xyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBVc2VyU2VydmljZSxcclxuICAgIEF1dGhHdWFyZFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5TW9kdWxlIHsgfVxyXG4iXX0=