"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MeterPipe = (function () {
    function MeterPipe() {
    }
    MeterPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _nValue = Number(value);
        if (_nValue === NaN) {
            console.warn('value have to be typeof Number');
            return value;
        }
        return Math.round(_nValue * 100) / 100 + " m";
    };
    return MeterPipe;
}());
MeterPipe = __decorate([
    core_1.Pipe({
        name: 'meter'
    })
], MeterPipe);
exports.MeterPipe = MeterPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0ZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1ldGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0Q7QUFLcEQsSUFBYSxTQUFTO0lBQXRCO0lBU0EsQ0FBQztJQVJDLDZCQUFTLEdBQVQsVUFBVSxLQUFVO1FBQUUsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7UUFDbEMsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztZQUMvQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsQ0FBQztRQUNELE1BQU0sQ0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLE9BQUksQ0FBQztJQUNoRCxDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQztBQVRZLFNBQVM7SUFIckIsV0FBSSxDQUFDO1FBQ0osSUFBSSxFQUFFLE9BQU87S0FDZCxDQUFDO0dBQ1csU0FBUyxDQVNyQjtBQVRZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdtZXRlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIE1ldGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICBjb25zdCBfblZhbHVlID0gTnVtYmVyKHZhbHVlKTtcclxuICAgIGlmIChfblZhbHVlID09PSBOYU4pIHtcclxuICAgICAgY29uc29sZS53YXJuKCd2YWx1ZSBoYXZlIHRvIGJlIHR5cGVvZiBOdW1iZXInKTtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGAke01hdGgucm91bmQoX25WYWx1ZSAqIDEwMCkgLyAxMDB9IG1gO1xyXG4gIH1cclxufVxyXG4iXX0=