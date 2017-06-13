"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EnvironmentService = (function () {
    function EnvironmentService() {
        this.api = 'relution/api';
        this.apiVersion = 'v1';
        this.server = 'https://iot2.relution.io';
    }
    /**
     * resolveurl to server
     *
     * @static
     * @param {any} url
     * @returns {string}
     *
     * @memberOf Url
     */
    EnvironmentService.prototype.resolveUrl = function (url) {
        // http, https, file, ./ directly from the app folder
        if (url.indexOf('http') !== -1 || url.indexOf('https') !== -1 || url.indexOf('file') !== -1 || url.indexOf('./') !== -1) {
            console.info("nothing to do " + url);
            return url;
        }
        var prefix = this.server + "/" + this.api + "/" + this.apiVersion;
        if (url[0] === '/') {
            console.info("resolved " + prefix + url);
            return "" + prefix + url;
        }
        console.info("resolved " + prefix + "/" + url);
        return prefix + "/" + url;
    };
    return EnvironmentService;
}());
EnvironmentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], EnvironmentService);
exports.EnvironmentService = EnvironmentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52aXJvbm1lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFHM0MsSUFBYSxrQkFBa0I7SUFLN0I7UUFKTyxRQUFHLEdBQUcsY0FBYyxDQUFDO1FBQ3JCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsV0FBTSxHQUFHLDBCQUEwQixDQUFDO0lBRTNCLENBQUM7SUFDakI7Ozs7Ozs7O09BUUc7SUFDSSx1Q0FBVSxHQUFqQixVQUFrQixHQUFHO1FBQ25CLHFEQUFxRDtRQUNyRCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4SCxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFpQixHQUFLLENBQUMsQ0FBQztZQUNyQyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2IsQ0FBQztRQUNELElBQU0sTUFBTSxHQUFNLElBQUksQ0FBQyxNQUFNLFNBQUksSUFBSSxDQUFDLEdBQUcsU0FBSSxJQUFJLENBQUMsVUFBWSxDQUFBO1FBRTlELEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBWSxNQUFNLEdBQUcsR0FBSyxDQUFDLENBQUM7WUFDekMsTUFBTSxDQUFDLEtBQUcsTUFBTSxHQUFHLEdBQUssQ0FBQztRQUMzQixDQUFDO1FBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFZLE1BQU0sU0FBSSxHQUFLLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUksTUFBTSxTQUFJLEdBQUssQ0FBQztJQUM1QixDQUFDO0lBRUgseUJBQUM7QUFBRCxDQUFDLEFBL0JELElBK0JDO0FBL0JZLGtCQUFrQjtJQUQ5QixpQkFBVSxFQUFFOztHQUNBLGtCQUFrQixDQStCOUI7QUEvQlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnRTZXJ2aWNlIHtcclxuICBwdWJsaWMgYXBpID0gJ3JlbHV0aW9uL2FwaSc7XHJcbiAgcHVibGljIGFwaVZlcnNpb24gPSAndjEnO1xyXG4gIHB1YmxpYyBzZXJ2ZXIgPSAnaHR0cHM6Ly9pb3QyLnJlbHV0aW9uLmlvJztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuICAvKipcclxuICAgKiByZXNvbHZldXJsIHRvIHNlcnZlclxyXG4gICAqXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIEBwYXJhbSB7YW55fSB1cmxcclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAqXHJcbiAgICogQG1lbWJlck9mIFVybFxyXG4gICAqL1xyXG4gIHB1YmxpYyByZXNvbHZlVXJsKHVybCk6IHN0cmluZyB7XHJcbiAgICAvLyBodHRwLCBodHRwcywgZmlsZSwgLi8gZGlyZWN0bHkgZnJvbSB0aGUgYXBwIGZvbGRlclxyXG4gICAgaWYgKHVybC5pbmRleE9mKCdodHRwJykgIT09IC0xIHx8IHVybC5pbmRleE9mKCdodHRwcycpICE9PSAtMSB8fCB1cmwuaW5kZXhPZignZmlsZScpICE9PSAtMSB8fCB1cmwuaW5kZXhPZignLi8nKSAhPT0gLTEpIHtcclxuICAgICAgY29uc29sZS5pbmZvKGBub3RoaW5nIHRvIGRvICR7dXJsfWApO1xyXG4gICAgICByZXR1cm4gdXJsO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcHJlZml4ID0gYCR7dGhpcy5zZXJ2ZXJ9LyR7dGhpcy5hcGl9LyR7dGhpcy5hcGlWZXJzaW9ufWBcclxuXHJcbiAgICBpZiAodXJsWzBdID09PSAnLycpIHtcclxuICAgICAgY29uc29sZS5pbmZvKGByZXNvbHZlZCAke3ByZWZpeH0ke3VybH1gKTtcclxuICAgICAgcmV0dXJuIGAke3ByZWZpeH0ke3VybH1gO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5pbmZvKGByZXNvbHZlZCAke3ByZWZpeH0vJHt1cmx9YCk7XHJcbiAgICByZXR1cm4gYCR7cHJlZml4fS8ke3VybH1gO1xyXG4gIH1cclxuXHJcbn1cclxuIl19