"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User() {
    }
    Object.defineProperty(User.prototype, "lastLogin", {
        get: function () {
            return {
                userName: this.userName,
                password: this.password,
                lastLoginTime: this.lastLoginTime
            };
        },
        set: function (user) {
            this.userName = user.userName;
            this.password = user.password;
            this.lastLoginTime = Date.now();
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFNQTtJQUFBO0lBa0JBLENBQUM7SUFiQyxzQkFBSSwyQkFBUzthQU1iO1lBQ0UsTUFBTSxDQUFDO2dCQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUN2QixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7YUFDbEMsQ0FBQTtRQUNILENBQUM7YUFaRCxVQUFjLElBQVc7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQVNILFdBQUM7QUFBRCxDQUFDLEFBbEJELElBa0JDO0FBbEJZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBJVXNlciB7XHJcbiAgdXNlck5hbWU6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG4gIGxhc3RMb2dpblRpbWU/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyIGltcGxlbWVudHMgSVVzZXIge1xyXG4gIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxuICBsYXN0TG9naW5UaW1lOiBudW1iZXI7XHJcblxyXG4gIHNldCBsYXN0TG9naW4odXNlcjogSVVzZXIpIHtcclxuICAgIHRoaXMudXNlck5hbWUgPSB1c2VyLnVzZXJOYW1lO1xyXG4gICAgdGhpcy5wYXNzd29yZCA9IHVzZXIucGFzc3dvcmQ7XHJcbiAgICB0aGlzLmxhc3RMb2dpblRpbWUgPSBEYXRlLm5vdygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxhc3RMb2dpbigpOiBJVXNlciB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1c2VyTmFtZTogdGhpcy51c2VyTmFtZSxcclxuICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXHJcbiAgICAgIGxhc3RMb2dpblRpbWU6IHRoaXMubGFzdExvZ2luVGltZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=