"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shared_module_1 = require("../shared/shared.module");
var beaconscanner_component_1 = require("./components/beaconscanner/beaconscanner.component");
var core_1 = require("@angular/core");
var BeaconScannerModule = (function () {
    function BeaconScannerModule() {
    }
    return BeaconScannerModule;
}());
BeaconScannerModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
        ],
        exports: [shared_module_1.SharedModule],
        declarations: [beaconscanner_component_1.BeaconScannerComponent],
        providers: [],
    })
], BeaconScannerModule);
exports.BeaconScannerModule = BeaconScannerModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nhbm5lci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY2FubmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlEQUFxRDtBQUNyRCw4RkFBMEY7QUFDMUYsc0NBQXlDO0FBV3pDLElBQWEsbUJBQW1CO0lBQWhDO0lBQW1DLENBQUM7SUFBRCwwQkFBQztBQUFELENBQUMsQUFBcEMsSUFBb0M7QUFBdkIsbUJBQW1CO0lBUi9CLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLDRCQUFZO1NBQ2I7UUFDRCxPQUFPLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQ3ZCLFlBQVksRUFBRSxDQUFDLGdEQUFzQixDQUFDO1FBQ3RDLFNBQVMsRUFBRSxFQUFFO0tBQ2QsQ0FBQztHQUNXLG1CQUFtQixDQUFJO0FBQXZCLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2hhcmVkTW9kdWxlfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQge0JlYWNvblNjYW5uZXJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9iZWFjb25zY2FubmVyL2JlYWNvbnNjYW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNoYXJlZE1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1NoYXJlZE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0JlYWNvblNjYW5uZXJDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBCZWFjb25TY2FubmVyTW9kdWxlIHsgfVxuIl19