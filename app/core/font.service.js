"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var linearIcons_free_1 = require("./linearIcons-free");
var core_1 = require("@angular/core");
var FontService = (function () {
    function FontService() {
        this.lnr = linearIcons_free_1.LinearFree;
    }
    FontService.prototype.getIcon = function (icon, font) {
        if (font === void 0) { font = linearIcons_free_1.LinearFree; }
        if (!font[icon]) {
            console.log("item " + icon + " not found");
            return icon;
        }
        var _icon = font[icon];
        console.log("get item " + _icon);
        return String.fromCharCode(_icon);
    };
    return FontService;
}());
FontService = __decorate([
    core_1.Injectable()
], FontService);
exports.FontService = FontService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9udC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZm9udC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdURBQWdEO0FBQ2hELHNDQUFpRDtBQUdqRCxJQUFhLFdBQVc7SUFEeEI7UUFFUyxRQUFHLEdBQUcsNkJBQVUsQ0FBQztJQVcxQixDQUFDO0lBVEMsNkJBQU8sR0FBUCxVQUFRLElBQUksRUFBRSxJQUFpQjtRQUFqQixxQkFBQSxFQUFBLG9DQUFpQjtRQUM3QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFRLElBQUksZUFBWSxDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7UUFDRCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFZLEtBQU8sQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWlksV0FBVztJQUR2QixpQkFBVSxFQUFFO0dBQ0EsV0FBVyxDQVl2QjtBQVpZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGluZWFyRnJlZSB9IGZyb20gJy4vbGluZWFySWNvbnMtZnJlZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUsIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZvbnRTZXJ2aWNlIHtcclxuICBwdWJsaWMgbG5yID0gTGluZWFyRnJlZTtcclxuXHJcbiAgZ2V0SWNvbihpY29uLCBmb250ID0gTGluZWFyRnJlZSkge1xyXG4gICAgaWYgKCFmb250W2ljb25dKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBpdGVtICR7aWNvbn0gbm90IGZvdW5kYCk7XHJcbiAgICAgIHJldHVybiBpY29uO1xyXG4gICAgfVxyXG4gICAgY29uc3QgX2ljb24gPSBmb250W2ljb25dO1xyXG4gICAgY29uc29sZS5sb2coYGdldCBpdGVtICR7X2ljb259YCk7XHJcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShfaWNvbik7XHJcbiAgfVxyXG59XHJcbiJdfQ==