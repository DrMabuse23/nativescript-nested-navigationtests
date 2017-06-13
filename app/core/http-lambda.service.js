"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var HttpLambdaService = (function (_super) {
    __extends(HttpLambdaService, _super);
    function HttpLambdaService(backend, defaultOptions) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.backend = backend;
        _this.defaultOptions = defaultOptions;
        return _this;
    }
    HttpLambdaService.prototype.beforeSend = function (options) {
        if (!options) {
            options = new http_1.RequestOptions();
            options.headers = new http_1.Headers();
        }
        else if (options && !options.headers) {
            options.headers = new http_1.Headers();
        }
        if (options.headers && !options.headers.get('content-type')) {
            options.headers.set('Content-Type', 'application/json');
            options.headers.set('Accept', 'application/json');
        }
        options.withCredentials = true;
        return options;
    };
    HttpLambdaService.prototype.req = function (type, url, data, options) {
        if (data === void 0) { data = null; }
        options = this.beforeSend(options);
        if (['post', 'patch', 'put'].indexOf(type) !== -1) {
            return _super.prototype[type].call(this, url, data, options);
        }
        return _super.prototype[type].call(this, url, options);
    };
    return HttpLambdaService;
}(http_1.Http));
HttpLambdaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.ConnectionBackend, http_1.RequestOptions])
], HttpLambdaService);
exports.HttpLambdaService = HttpLambdaService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1sYW1iZGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAtbGFtYmRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0Msc0NBTXVCO0FBR3ZCLElBQWEsaUJBQWlCO0lBQVMscUNBQUk7SUFFekMsMkJBQW1CLE9BQTBCLEVBQVMsY0FBOEI7UUFBcEYsWUFDRSxrQkFBTSxPQUFPLEVBQUUsY0FBYyxDQUFDLFNBQy9CO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQW1CO1FBQVMsb0JBQWMsR0FBZCxjQUFjLENBQWdCOztJQUVwRixDQUFDO0lBRUQsc0NBQVUsR0FBVixVQUFXLE9BQXdCO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNiLE9BQU8sR0FBRyxJQUFJLHFCQUFjLEVBQUUsQ0FBQztZQUMvQixPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDbEMsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN2QyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDbEMsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7WUFDeEQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUNELE9BQU8sQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELCtCQUFHLEdBQUgsVUFBSSxJQUFZLEVBQUUsR0FBVyxFQUFFLElBQVcsRUFBRSxPQUF3QjtRQUFyQyxxQkFBQSxFQUFBLFdBQVc7UUFDeEMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEQsTUFBTSxDQUFDLGlCQUFNLElBQUksQ0FBQyxZQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUNELE1BQU0sQ0FBQyxpQkFBTSxJQUFJLENBQUMsWUFBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQTVCRCxDQUF1QyxXQUFJLEdBNEIxQztBQTVCWSxpQkFBaUI7SUFEN0IsaUJBQVUsRUFBRTtxQ0FHaUIsd0JBQWlCLEVBQXlCLHFCQUFjO0dBRnpFLGlCQUFpQixDQTRCN0I7QUE1QlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtcclxuICBDb25uZWN0aW9uQmFja2VuZCxcclxuICBIZWFkZXJzLFxyXG4gIEh0dHAsXHJcbiAgUmVxdWVzdE9wdGlvbnMsXHJcbiAgUmVzcG9uc2UsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIdHRwTGFtYmRhU2VydmljZSBleHRlbmRzIEh0dHAge1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYmFja2VuZDogQ29ubmVjdGlvbkJhY2tlbmQsIHB1YmxpYyBkZWZhdWx0T3B0aW9uczogUmVxdWVzdE9wdGlvbnMpIHtcclxuICAgIHN1cGVyKGJhY2tlbmQsIGRlZmF1bHRPcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGJlZm9yZVNlbmQob3B0aW9ucz86IFJlcXVlc3RPcHRpb25zKTogUmVxdWVzdE9wdGlvbnMge1xyXG4gICAgaWYgKCFvcHRpb25zKSB7XHJcbiAgICAgIG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoKTtcclxuICAgICAgb3B0aW9ucy5oZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIH0gZWxzZSBpZiAob3B0aW9ucyAmJiAhb3B0aW9ucy5oZWFkZXJzKSB7XHJcbiAgICAgIG9wdGlvbnMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9ucy5oZWFkZXJzICYmICFvcHRpb25zLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSkge1xyXG4gICAgICBvcHRpb25zLmhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICBvcHRpb25zLmhlYWRlcnMuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgfVxyXG4gICAgb3B0aW9ucy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICByZXEodHlwZTogc3RyaW5nLCB1cmw6IHN0cmluZywgZGF0YSA9IG51bGwsIG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9IHRoaXMuYmVmb3JlU2VuZChvcHRpb25zKTtcclxuICAgIGlmIChbJ3Bvc3QnLCAncGF0Y2gnLCAncHV0J10uaW5kZXhPZih0eXBlKSAhPT0gLTEpIHtcclxuICAgICAgcmV0dXJuIHN1cGVyW3R5cGVdKHVybCwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3VwZXJbdHlwZV0odXJsLCBvcHRpb25zKTtcclxuICB9XHJcbn1cclxuIl19