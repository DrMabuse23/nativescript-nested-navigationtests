"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var platform_providers_1 = require("nativescript-angular/platform-providers");
var TKIfAndroidDirective = (function () {
    function TKIfAndroidDirective(device, container, templateRef) {
        if (device.os === platform_1.platformNames.android) {
            container.createEmbeddedView(templateRef);
        }
    }
    return TKIfAndroidDirective;
}());
TKIfAndroidDirective = __decorate([
    core_1.Directive({ selector: "[tkIfAndroid]" }),
    __param(0, core_1.Inject(platform_providers_1.DEVICE)),
    __metadata("design:paramtypes", [Object, core_1.ViewContainerRef, core_1.TemplateRef])
], TKIfAndroidDirective);
exports.TKIfAndroidDirective = TKIfAndroidDirective;
var TKIfIOSDirective = (function () {
    function TKIfIOSDirective(device, container, templateRef) {
        if (device.os === platform_1.platformNames.ios) {
            container.createEmbeddedView(templateRef);
        }
    }
    return TKIfIOSDirective;
}());
TKIfIOSDirective = __decorate([
    core_1.Directive({ selector: "[tkIfIOS]" }),
    __param(0, core_1.Inject(platform_providers_1.DEVICE)),
    __metadata("design:paramtypes", [Object, core_1.ViewContainerRef, core_1.TemplateRef])
], TKIfIOSDirective);
exports.TKIfIOSDirective = TKIfIOSDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0uZGlyZWN0aXZlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBsYXRmb3JtLmRpcmVjdGl2ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUY7QUFDakYscUNBQWlEO0FBQ2pELDhFQUFpRTtBQUdqRSxJQUFhLG9CQUFvQjtJQUM3Qiw4QkFBNkIsTUFBYyxFQUFFLFNBQTJCLEVBQUUsV0FBZ0M7UUFDdEcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyx3QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdEMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlDLENBQUM7SUFDTCxDQUFDO0lBQ0wsMkJBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQztBQU5ZLG9CQUFvQjtJQURoQyxnQkFBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxDQUFDO0lBRXZCLFdBQUEsYUFBTSxDQUFDLDJCQUFNLENBQUMsQ0FBQTs2Q0FBNEIsdUJBQWdCLEVBQWUsa0JBQVc7R0FEekYsb0JBQW9CLENBTWhDO0FBTlksb0RBQW9CO0FBU2pDLElBQWEsZ0JBQWdCO0lBQ3pCLDBCQUE2QixNQUFjLEVBQUUsU0FBMkIsRUFBRSxXQUFnQztRQUN0RyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLHdCQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDOUMsQ0FBQztJQUNMLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFORCxJQU1DO0FBTlksZ0JBQWdCO0lBRDVCLGdCQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLENBQUM7SUFFbkIsV0FBQSxhQUFNLENBQUMsMkJBQU0sQ0FBQyxDQUFBOzZDQUE0Qix1QkFBZ0IsRUFBZSxrQkFBVztHQUR6RixnQkFBZ0IsQ0FNNUI7QUFOWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERldmljZSwgcGxhdGZvcm1OYW1lcyB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0IHsgREVWSUNFIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtLXByb3ZpZGVyc1wiO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6IFwiW3RrSWZBbmRyb2lkXVwiIH0pXG5leHBvcnQgY2xhc3MgVEtJZkFuZHJvaWREaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCBASW5qZWN0KERFVklDRSkgZGV2aWNlOiBEZXZpY2UsIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPE9iamVjdD4pIHtcbiAgICAgICAgaWYgKGRldmljZS5vcyA9PT0gcGxhdGZvcm1OYW1lcy5hbmRyb2lkKSB7XG4gICAgICAgICAgICBjb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlUmVmKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiBcIlt0a0lmSU9TXVwiIH0pXG5leHBvcnQgY2xhc3MgVEtJZklPU0RpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoIEBJbmplY3QoREVWSUNFKSBkZXZpY2U6IERldmljZSwgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8T2JqZWN0Pikge1xuICAgICAgICBpZiAoZGV2aWNlLm9zID09PSBwbGF0Zm9ybU5hbWVzLmlvcykge1xuICAgICAgICAgICAgY29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZVJlZik7XG4gICAgICAgIH1cbiAgICB9XG59Il19