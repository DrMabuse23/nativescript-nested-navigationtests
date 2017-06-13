"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_directives_1 = require("./directives/platform.directives");
var platform_directives_2 = require("./directives/platform.directives");
var font_icon_pipe_1 = require("./pipes/font-icon.pipe");
var router_1 = require("nativescript-angular/router");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var menuoutlet_component_1 = require("./components/menuoutlet/menuoutlet.component");
var meter_pipe_1 = require("./pipes/meter.pipe");
var fab_button_component_1 = require("./components/fab-button.component");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var angular_2 = require("nativescript-telerik-ui/listview/angular");
var angular_pipes_1 = require("angular-pipes");
var components = [
    fab_button_component_1.FabBtnComponent,
    menuoutlet_component_1.MenuOutletComponent
];
var directives = [
    platform_directives_2.TKIfAndroidDirective,
    platform_directives_1.TKIfIOSDirective
];
var pipes = [
    meter_pipe_1.MeterPipe,
    font_icon_pipe_1.FontIconPipe
];
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            angular_pipes_1.NgStringPipesModule,
            angular_2.NativeScriptUIListViewModule,
            common_1.CommonModule,
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            router_1.NativeScriptRouterModule,
            angular_1.NativeScriptUISideDrawerModule
        ],
        declarations: components.concat(pipes, directives),
        exports: [
            angular_pipes_1.NgStringPipesModule,
            angular_2.NativeScriptUIListViewModule,
            common_1.CommonModule,
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            router_1.NativeScriptRouterModule,
            angular_1.NativeScriptUISideDrawerModule
        ].concat(components, pipes, directives)
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3RUFBa0U7QUFDbEUsd0VBQXNFO0FBQ3RFLHlEQUFzRDtBQUN0RCxzREFBdUU7QUFDdkUsc0VBQTRGO0FBQzVGLHFGQUFtRjtBQUNuRixpREFBK0M7QUFDL0MsMEVBQW9FO0FBQ3BFLGdGQUE4RTtBQUM5RSxvREFBcUU7QUFDckUsc0NBQXlDO0FBQ3pDLDBDQUErQztBQUMvQyxvRUFBd0Y7QUFDeEYsK0NBQW9EO0FBRXBELElBQU0sVUFBVSxHQUFHO0lBQ2pCLHNDQUFlO0lBQ2YsMENBQW1CO0NBQ3BCLENBQUM7QUFDRixJQUFNLFVBQVUsR0FBRztJQUNqQiwwQ0FBb0I7SUFDcEIsc0NBQWdCO0NBQ2pCLENBQUM7QUFDRixJQUFNLEtBQUssR0FBRztJQUNaLHNCQUFTO0lBQ1QsNkJBQVk7Q0FDYixDQUFDO0FBOEJGLElBQWEsWUFBWTtJQUF6QjtJQUE0QixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBQTdCLElBQTZCO0FBQWhCLFlBQVk7SUE1QnhCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLG1DQUFtQjtZQUNuQixzQ0FBNEI7WUFDNUIscUJBQVk7WUFDWix3Q0FBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLGlDQUF3QjtZQUN4Qix3Q0FBOEI7U0FDL0I7UUFDRCxZQUFZLEVBQ1AsVUFBVSxRQUNWLEtBQUssRUFDTCxVQUFVLENBQ2Q7UUFDRCxPQUFPO1lBQ0wsbUNBQW1CO1lBQ25CLHNDQUE0QjtZQUM1QixxQkFBWTtZQUNaLHdDQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsaUNBQXdCO1lBQ3hCLHdDQUE4QjtpQkFDM0IsVUFBVSxFQUNWLEtBQUssRUFDTCxVQUFVLENBQ2Q7S0FDRixDQUFDO0dBQ1csWUFBWSxDQUFJO0FBQWhCLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUS0lmSU9TRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvcGxhdGZvcm0uZGlyZWN0aXZlcyc7XHJcbmltcG9ydCB7VEtJZkFuZHJvaWREaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9wbGF0Zm9ybS5kaXJlY3RpdmVzJztcclxuaW1wb3J0IHsgRm9udEljb25QaXBlIH0gZnJvbSAnLi9waXBlcy9mb250LWljb24ucGlwZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhcic7XHJcbmltcG9ydCB7IE1lbnVPdXRsZXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbWVudW91dGxldC9tZW51b3V0bGV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1ldGVyUGlwZSB9IGZyb20gJy4vcGlwZXMvbWV0ZXIucGlwZSc7XHJcbmltcG9ydCB7IEZhYkJ0bkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mYWItYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9saXN0dmlldy9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IE5nU3RyaW5nUGlwZXNNb2R1bGUgfSBmcm9tICdhbmd1bGFyLXBpcGVzJztcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbXHJcbiAgRmFiQnRuQ29tcG9uZW50LFxyXG4gIE1lbnVPdXRsZXRDb21wb25lbnRcclxuXTtcclxuY29uc3QgZGlyZWN0aXZlcyA9IFtcclxuICBUS0lmQW5kcm9pZERpcmVjdGl2ZSxcclxuICBUS0lmSU9TRGlyZWN0aXZlXHJcbl07XHJcbmNvbnN0IHBpcGVzID0gW1xyXG4gIE1ldGVyUGlwZSxcclxuICBGb250SWNvblBpcGVcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmdTdHJpbmdQaXBlc01vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAuLi5jb21wb25lbnRzLFxyXG4gICAgLi4ucGlwZXMsXHJcbiAgICAuLi5kaXJlY3RpdmVzXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBOZ1N0cmluZ1BpcGVzTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxyXG4gICAgLi4uY29tcG9uZW50cyxcclxuICAgIC4uLnBpcGVzLFxyXG4gICAgLi4uZGlyZWN0aXZlc1xyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7IH1cclxuIl19