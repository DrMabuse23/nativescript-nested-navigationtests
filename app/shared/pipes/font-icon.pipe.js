"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var font_service_1 = require("../../core/font.service");
var core_1 = require("@angular/core");
var FontIconPipe = (function () {
    function FontIconPipe(fontService) {
        this.fontService = fontService;
    }
    FontIconPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return String.fromCharCode(value);
    };
    return FontIconPipe;
}());
FontIconPipe = __decorate([
    core_1.Pipe({
        name: 'icon'
    }),
    __metadata("design:paramtypes", [font_service_1.FontService])
], FontIconPipe);
exports.FontIconPipe = FontIconPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9udC1pY29uLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb250LWljb24ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdEQUFzRDtBQUN0RCxzQ0FBb0Q7QUFNcEQsSUFBYSxZQUFZO0lBQ3ZCLHNCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUU1QyxDQUFDO0lBQ0QsZ0NBQVMsR0FBVCxVQUFVLEtBQVU7UUFBRSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLDZCQUFjOztRQUNsQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLFlBQVk7SUFKeEIsV0FBSSxDQUFDO1FBQ0osSUFBSSxFQUFFLE1BQU07S0FDYixDQUFDO3FDQUdpQywwQkFBVztHQURqQyxZQUFZLENBT3hCO0FBUFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250U2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvZm9udC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdpY29uJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvbnRJY29uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9udFNlcnZpY2U6IEZvbnRTZXJ2aWNlKSB7XHJcblxyXG4gIH1cclxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUodmFsdWUpO1xyXG4gIH1cclxufVxyXG4iXX0=