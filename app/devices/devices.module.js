"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var device_component_1 = require("./components/device/device.component");
var devices_component_1 = require("./components/devices/devices.component");
var core_1 = require("@angular/core");
var components = [
    devices_component_1.DevicesComponent,
    device_component_1.DeviceComponent
];
var DevicesModule = (function () {
    function DevicesModule() {
    }
    return DevicesModule;
}());
DevicesModule = __decorate([
    core_1.NgModule({
        imports: [],
        exports: [],
        declarations: components.slice(),
        providers: [],
    })
], DevicesModule);
exports.DevicesModule = DevicesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXZpY2VzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlFQUFxRTtBQUNyRSw0RUFBd0U7QUFDeEUsc0NBQXlDO0FBRXpDLElBQU0sVUFBVSxHQUFHO0lBQ2pCLG9DQUFnQjtJQUNoQixrQ0FBZTtDQUNoQixDQUFDO0FBVUYsSUFBYSxhQUFhO0lBQTFCO0lBQTZCLENBQUM7SUFBRCxvQkFBQztBQUFELENBQUMsQUFBOUIsSUFBOEI7QUFBakIsYUFBYTtJQVJ6QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsRUFBRTtRQUNYLE9BQU8sRUFBRSxFQUFFO1FBQ1gsWUFBWSxFQUNQLFVBQVUsUUFDZDtRQUNELFNBQVMsRUFBRSxFQUFFO0tBQ2QsQ0FBQztHQUNXLGFBQWEsQ0FBSTtBQUFqQixzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGV2aWNlQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvZGV2aWNlL2RldmljZS5jb21wb25lbnQnO1xuaW1wb3J0IHtEZXZpY2VzQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvZGV2aWNlcy9kZXZpY2VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jb25zdCBjb21wb25lbnRzID0gW1xuICBEZXZpY2VzQ29tcG9uZW50LFxuICBEZXZpY2VDb21wb25lbnRcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtdLFxuICBleHBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uY29tcG9uZW50c1xuICBdLFxuICBwcm92aWRlcnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBEZXZpY2VzTW9kdWxlIHsgfVxuIl19