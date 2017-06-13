"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var applicationbar_service_1 = require("./applicationbar.service");
var font_service_1 = require("./font.service");
var environment_service_1 = require("./environment.service");
var validators_directive_1 = require("./validators.directive");
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("nativescript-angular/forms");
var animations_1 = require("nativescript-angular/animations");
var http_lambda_service_1 = require("./http-lambda.service");
var http_1 = require("@angular/http");
var http_2 = require("nativescript-angular/http");
var MyErrorHandler = (function () {
    function MyErrorHandler() {
    }
    MyErrorHandler.prototype.handleError = function (err) {
        console.log("Ups Oh MyErrorHandler say: " + (err.message ? err.message : ''));
        return err;
    };
    return MyErrorHandler;
}());
function lambda(backend, defaultOptions) {
    return new http_lambda_service_1.HttpLambdaService(backend, defaultOptions);
}
exports.lambda = lambda;
var providers = [
    {
        provide: http_1.Http,
        useFactory: lambda,
        deps: [http_1.XHRBackend, http_1.RequestOptions]
    },
    { provide: core_1.ErrorHandler, useClass: MyErrorHandler },
    environment_service_1.EnvironmentService,
    font_service_1.FontService,
    applicationbar_service_1.ApplicationBarHelper
];
var directives = [
    validators_directive_1.MinLengthDirective,
    validators_directive_1.IsEmailDirective
];
var CoreModule = CoreModule_1 = (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    CoreModule.forRoot = function () {
        return { ngModule: CoreModule_1, providers: providers.slice() };
    };
    return CoreModule;
}());
CoreModule = CoreModule_1 = __decorate([
    core_2.NgModule({
        imports: [
            common_1.CommonModule,
            http_2.NativeScriptHttpModule,
            animations_1.NativeScriptAnimationsModule,
            forms_1.NativeScriptFormsModule
        ],
        declarations: directives.slice(),
        exports: [
            common_1.CommonModule,
            http_2.NativeScriptHttpModule,
            animations_1.NativeScriptAnimationsModule,
            forms_1.NativeScriptFormsModule
        ],
        providers: providers.slice()
    }),
    __param(0, core_2.Optional()), __param(0, core_2.SkipSelf()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);
exports.CoreModule = CoreModule;
var CoreModule_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1FQUE4RDtBQUM5RCwrQ0FBNkM7QUFDN0MsNkRBQTJEO0FBQzNELCtEQUE4RTtBQUM5RSxzQ0FBNkM7QUFDN0Msc0NBQWtGO0FBQ2xGLDBDQUErQztBQUMvQyxvREFBcUU7QUFDckUsOERBQStFO0FBQy9FLDZEQUEwRDtBQUMxRCxzQ0FBNkU7QUFDN0Usa0RBQW1FO0FBRW5FO0lBQUE7SUFLQSxDQUFDO0lBSkMsb0NBQVcsR0FBWCxVQUFZLEdBQVE7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBOEIsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBRSxDQUFDLENBQUM7UUFDNUUsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFMRCxJQUtDO0FBQ0QsZ0JBQ0UsT0FBbUIsRUFDbkIsY0FBOEI7SUFFOUIsTUFBTSxDQUFDLElBQUksdUNBQWlCLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQ3hELENBQUM7QUFMRCx3QkFLQztBQUVELElBQU0sU0FBUyxHQUFHO0lBQ2hCO1FBQ0UsT0FBTyxFQUFFLFdBQUk7UUFDYixVQUFVLEVBQUUsTUFBTTtRQUNsQixJQUFJLEVBQUUsQ0FBQyxpQkFBVSxFQUFFLHFCQUFjLENBQUM7S0FDbkM7SUFDRCxFQUFFLE9BQU8sRUFBRSxtQkFBWSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUU7SUFDbkQsd0NBQWtCO0lBQ2xCLDBCQUFXO0lBQ1gsNkNBQW9CO0NBQ3JCLENBQUM7QUFFRixJQUFNLFVBQVUsR0FBRztJQUNqQix5Q0FBa0I7SUFDbEIsdUNBQWdCO0NBQ2pCLENBQUM7QUFvQkYsSUFBYSxVQUFVO0lBQ3JCLG9CQUFxQyxZQUF3QjtRQUMzRCxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQ2IsK0RBQStELENBQ2hFLENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQztJQUVNLGtCQUFPLEdBQWQ7UUFDRSxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsWUFBVSxFQUFFLFNBQVMsRUFBTSxTQUFTLFFBQUMsRUFBRSxDQUFDO0lBQzdELENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWlksVUFBVTtJQWxCdEIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AscUJBQVk7WUFDWiw2QkFBc0I7WUFDdEIseUNBQTRCO1lBQzVCLCtCQUF1QjtTQUN4QjtRQUNELFlBQVksRUFDUCxVQUFVLFFBQ2Q7UUFDRCxPQUFPLEVBQUU7WUFDUCxxQkFBWTtZQUNaLDZCQUFzQjtZQUN0Qix5Q0FBNEI7WUFDNUIsK0JBQXVCO1NBQ3hCO1FBQ0QsU0FBUyxFQUFNLFNBQVMsUUFBQztLQUMxQixDQUFDO0lBRWMsV0FBQSxlQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsZUFBUSxFQUFFLENBQUE7cUNBQWUsVUFBVTtHQURsRCxVQUFVLENBWXRCO0FBWlksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FwcGxpY2F0aW9uQmFySGVscGVyfSBmcm9tICcuL2FwcGxpY2F0aW9uYmFyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGb250U2VydmljZSB9IGZyb20gJy4vZm9udC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRW52aXJvbm1lbnRTZXJ2aWNlIH0gZnJvbSAnLi9lbnZpcm9ubWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWluTGVuZ3RoRGlyZWN0aXZlLCBJc0VtYWlsRGlyZWN0aXZlIH0gZnJvbSAnLi92YWxpZGF0b3JzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEVycm9ySGFuZGxlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xyXG5pbXBvcnQgeyBIdHRwTGFtYmRhU2VydmljZSB9IGZyb20gJy4vaHR0cC1sYW1iZGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlcXVlc3RPcHRpb25zLCBYSFJCYWNrZW5kLCBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xyXG5cclxuY2xhc3MgTXlFcnJvckhhbmRsZXIgaW1wbGVtZW50cyBFcnJvckhhbmRsZXIge1xyXG4gIGhhbmRsZUVycm9yKGVycjogYW55KTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyhgVXBzIE9oIE15RXJyb3JIYW5kbGVyIHNheTogJHtlcnIubWVzc2FnZSA/IGVyci5tZXNzYWdlIDogJyd9YCk7XHJcbiAgICByZXR1cm4gZXJyO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbGFtYmRhKFxyXG4gIGJhY2tlbmQ6IFhIUkJhY2tlbmQsXHJcbiAgZGVmYXVsdE9wdGlvbnM6IFJlcXVlc3RPcHRpb25zXHJcbikge1xyXG4gIHJldHVybiBuZXcgSHR0cExhbWJkYVNlcnZpY2UoYmFja2VuZCwgZGVmYXVsdE9wdGlvbnMpO1xyXG59XHJcblxyXG5jb25zdCBwcm92aWRlcnMgPSBbXHJcbiAge1xyXG4gICAgcHJvdmlkZTogSHR0cCxcclxuICAgIHVzZUZhY3Rvcnk6IGxhbWJkYSxcclxuICAgIGRlcHM6IFtYSFJCYWNrZW5kLCBSZXF1ZXN0T3B0aW9uc11cclxuICB9LFxyXG4gIHsgcHJvdmlkZTogRXJyb3JIYW5kbGVyLCB1c2VDbGFzczogTXlFcnJvckhhbmRsZXIgfSxcclxuICBFbnZpcm9ubWVudFNlcnZpY2UsXHJcbiAgRm9udFNlcnZpY2UsXHJcbiAgQXBwbGljYXRpb25CYXJIZWxwZXJcclxuXTtcclxuXHJcbmNvbnN0IGRpcmVjdGl2ZXMgPSBbXHJcbiAgTWluTGVuZ3RoRGlyZWN0aXZlLFxyXG4gIElzRW1haWxEaXJlY3RpdmVcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdEFuaW1hdGlvbnNNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAuLi5kaXJlY3RpdmVzXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0QW5pbWF0aW9uc01vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFsuLi5wcm92aWRlcnNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBDb3JlTW9kdWxlKSB7XHJcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnQ29yZU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seSdcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IENvcmVNb2R1bGUsIHByb3ZpZGVyczogWy4uLnByb3ZpZGVyc10gfTtcclxuICB9XHJcbn1cclxuIl19