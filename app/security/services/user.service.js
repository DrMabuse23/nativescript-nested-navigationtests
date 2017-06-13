"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var environment_service_1 = require("./../../core/environment.service");
var User_1 = require("./../models/User");
var core_1 = require("@angular/core");
var UserService = (function () {
    function UserService(http, envService) {
        this.http = http;
        this.envService = envService;
        this._user = new User_1.User();
        this._isLoggedIn = false;
    }
    Object.defineProperty(UserService.prototype, "securityUrl", {
        get: function () {
            return this.envService.server + "/gofer/security/rest/auth/login";
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.authenticate = function (userName, password) {
        var _this = this;
        return this.http.post(this.securityUrl, { userName: userName, password: password })
            .map(function (body) { return body.json(); })
            .map(function (res) {
            _this.userName = userName;
            _this.password = password;
            _this.isLoggedIn = true;
            _this._information = res;
            return res;
        });
    };
    Object.defineProperty(UserService.prototype, "loginInformation", {
        get: function () {
            return this._information;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "isLoggedIn", {
        get: function () {
            return this._isLoggedIn;
        },
        set: function (value) {
            this._isLoggedIn = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "userName", {
        get: function () {
            return this._user.userName;
        },
        set: function (name) {
            this._user.userName = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "password", {
        get: function () {
            return this._user.password;
        },
        set: function (password) {
            this._user.password = password;
        },
        enumerable: true,
        configurable: true
    });
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, environment_service_1.EnvironmentService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsc0NBQXFDO0FBQ3JDLHdFQUFzRTtBQUN0RSx5Q0FBd0M7QUFDeEMsc0NBQTJDO0FBRzNDLElBQWEsV0FBVztJQUt0QixxQkFBb0IsSUFBVSxFQUFVLFVBQThCO1FBQWxELFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFvQjtRQUNwRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVELHNCQUFZLG9DQUFXO2FBQXZCO1lBQ0UsTUFBTSxDQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxvQ0FBaUMsQ0FBQztRQUNwRSxDQUFDOzs7T0FBQTtJQUVNLGtDQUFZLEdBQW5CLFVBQW9CLFFBQVEsRUFBRSxRQUFRO1FBQXRDLGlCQVVDO1FBVEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQzthQUNoRixHQUFHLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDO2FBQzFCLEdBQUcsQ0FBQyxVQUFDLEdBQUc7WUFDUCxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixLQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztZQUN4QixNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsc0JBQUkseUNBQWdCO2FBQXBCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtQ0FBVTthQUFkO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUIsQ0FBQzthQUVELFVBQWUsS0FBYztZQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLGlDQUFRO2FBWVo7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDN0IsQ0FBQzthQWRELFVBQWEsSUFBWTtZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxpQ0FBUTthQUlaO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQzdCLENBQUM7YUFORCxVQUFhLFFBQWdCO1lBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQVNILGtCQUFDO0FBQUQsQ0FBQyxBQXJERCxJQXFEQztBQXJEWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7cUNBTWUsV0FBSSxFQUFzQix3Q0FBa0I7R0FMM0QsV0FBVyxDQXFEdkI7QUFyRFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgSVVzZXJSZXNwb25zZSB9IGZyb20gJy4vLi4vaW50ZXJmYWNlcy9pdXNlci1yZXNwb25zZSc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgRW52aXJvbm1lbnRTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9jb3JlL2Vudmlyb25tZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi8uLi9tb2RlbHMvVXNlcic7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuICBwcml2YXRlIF91c2VyOiBVc2VyO1xyXG4gIHByaXZhdGUgX2lzTG9nZ2VkSW46IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBfaW5mb3JtYXRpb246IElVc2VyUmVzcG9uc2UuUm9vdE9iamVjdDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIGVudlNlcnZpY2U6IEVudmlyb25tZW50U2VydmljZSkge1xyXG4gICAgdGhpcy5fdXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICB0aGlzLl9pc0xvZ2dlZEluID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBzZWN1cml0eVVybCgpIHtcclxuICAgIHJldHVybiBgJHt0aGlzLmVudlNlcnZpY2Uuc2VydmVyfS9nb2Zlci9zZWN1cml0eS9yZXN0L2F1dGgvbG9naW5gO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGF1dGhlbnRpY2F0ZSh1c2VyTmFtZSwgcGFzc3dvcmQpOiBPYnNlcnZhYmxlPElVc2VyUmVzcG9uc2UuUm9vdE9iamVjdD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuc2VjdXJpdHlVcmwsIHsgdXNlck5hbWU6IHVzZXJOYW1lLCBwYXNzd29yZDogcGFzc3dvcmQgfSlcclxuICAgICAgLm1hcCgoYm9keSkgPT4gYm9keS5qc29uKCkpXHJcbiAgICAgIC5tYXAoKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMudXNlck5hbWUgPSB1c2VyTmFtZTtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XHJcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9pbmZvcm1hdGlvbiA9IHJlcztcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldCBsb2dpbkluZm9ybWF0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2luZm9ybWF0aW9uO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTG9nZ2VkSW4oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNMb2dnZWRJbjtcclxuICB9XHJcblxyXG4gIHNldCBpc0xvZ2dlZEluKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9pc0xvZ2dlZEluID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgdXNlck5hbWUobmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl91c2VyLnVzZXJOYW1lID0gbmFtZTtcclxuICB9XHJcblxyXG4gIHNldCBwYXNzd29yZChwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl91c2VyLnBhc3N3b3JkID0gcGFzc3dvcmQ7XHJcbiAgfVxyXG5cclxuICBnZXQgcGFzc3dvcmQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdXNlci5wYXNzd29yZDtcclxuICB9XHJcblxyXG4gIGdldCB1c2VyTmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl91c2VyLnVzZXJOYW1lO1xyXG4gIH1cclxufVxyXG4iXX0=