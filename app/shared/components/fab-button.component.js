"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("tns-core-modules/color");
var core_1 = require("@angular/core");
var FabBtnComponent = (function () {
    function FabBtnComponent() {
        this._icon = '';
        this._className = '';
        this.submit = new core_1.EventEmitter(true);
    }
    Object.defineProperty(FabBtnComponent.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        set: function (name) {
            this._icon = String.fromCharCode(name);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FabBtnComponent.prototype, "className", {
        get: function () {
            return this._className;
        },
        set: function (className) {
            this._className = className;
        },
        enumerable: true,
        configurable: true
    });
    FabBtnComponent.prototype.onLoaded = function (args) {
        var tnsView = args.object; //This is the outer StackLayout
        if (tnsView.android) {
            var nativeAnView = tnsView.android;
            var shape = new android.graphics.drawable.GradientDrawable();
            shape.setShape(android.graphics.drawable.GradientDrawable.OVAL);
            shape.setColor(android.graphics.Color.parseColor('#30bcff'));
            nativeAnView.setBackgroundDrawable(shape);
            nativeAnView.setElevation(20);
        }
        else if (tnsView.ios) {
            var nativeView = tnsView.ios;
            nativeView.layer.shadowColor = new color_1.Color('#888888').ios.CGColor;
            nativeView.layer.shadowOffset = CGSizeMake(0, 2.0);
            nativeView.layer.shadowOpacity = 0.5;
            nativeView.layer.shadowRadius = 5.0;
        }
    };
    FabBtnComponent.prototype.onTouch = function (args) {
        var theBtn = args.view;
        this.submit.emit('touched');
        theBtn.className = args.action === 'down' ? "fab-btn down " + this.className : "fab-btn " + this.className;
    };
    return FabBtnComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], FabBtnComponent.prototype, "icon", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], FabBtnComponent.prototype, "className", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FabBtnComponent.prototype, "submit", void 0);
FabBtnComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'FabButton',
        templateUrl: './fab-button.component.html',
        styles: [
            "\n    .fab-btn-shadow {\n      margin-top: -12px;\n    }\n    .fab-btn {\n      border-radius: 50%;\n      width:56;\n      color: white;\n      height:56;\n      margin: 20px;\n      background-color: #29323c;\n      font-size: 24;\n    }\n    .fab-btn-shadow {\n      min-height: 65;\n    }\n    .fab-btn.small {\n      width:40;\n      height:40;\n      font-size: 18;\n    }\n    .fab-btn.down {\n      animation-name: down;\n      animation-duration: 0.2s;\n      animation-fill-mode: forwards;\n    }\n    .fab-btn-text {\n      color:#fff;\n      font-size: 36;\n      margin-top:-4;\n    }\n    @keyframes down {\n      from { background-color: #29323c; }\n      to { background-color: #485563;  }\n    }\n  "
        ]
    }),
    __metadata("design:paramtypes", [])
], FabBtnComponent);
exports.FabBtnComponent = FabBtnComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFiLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmYWItYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdEQUErQztBQUMvQyxzQ0FBdUU7QUErQ3ZFLElBQWEsZUFBZTtJQXNCMUI7UUFyQlEsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNoQixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBa0J0QixXQUFNLEdBQXlCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVoRCxDQUFDO0lBbEJSLHNCQUFJLGlDQUFJO2FBSWpCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzthQU5RLFVBQVMsSUFBSTtZQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7SUFNUSxzQkFBSSxzQ0FBUzthQUl0QjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7YUFOUSxVQUFjLFNBQWlCO1lBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBVU0sa0NBQVEsR0FBZixVQUFnQixJQUFJO1FBQ2xCLElBQUksT0FBTyxHQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQywrQkFBK0I7UUFDL0QsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNuQyxJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDN0QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoRSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzdELFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQyxZQUFZLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUM3QixVQUFVLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQ2hFLFVBQVUsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbkQsVUFBVSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO1lBQ3JDLFVBQVUsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUN0QyxDQUFDO0lBQ0gsQ0FBQztJQUVNLGlDQUFPLEdBQWQsVUFBZSxJQUFJO1FBQ2pCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sR0FBRyxrQkFBZ0IsSUFBSSxDQUFDLFNBQVcsR0FBRyxhQUFXLElBQUksQ0FBQyxTQUFXLENBQUE7SUFDNUcsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQS9DRCxJQStDQztBQTNDVTtJQUFSLFlBQUssRUFBRTs7OzJDQUVQO0FBTVE7SUFBUixZQUFLLEVBQUU7OztnREFFUDtBQU1TO0lBQVQsYUFBTSxFQUFFOzhCQUFTLG1CQUFZOytDQUFrQztBQXBCckQsZUFBZTtJQTNDM0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsNkJBQTZCO1FBQzFDLE1BQU0sRUFBRTtZQUNOLDhzQkFtQ0Q7U0FDQTtLQUNGLENBQUM7O0dBQ1csZUFBZSxDQStDM0I7QUEvQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvY29sb3InO1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIElucHV0LCBDb21wb25lbnQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBDR1NpemVNYWtlOiBhbnk7XHJcbmRlY2xhcmUgY29uc3QgYW5kcm9pZDogYW55O1xyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnRmFiQnV0dG9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmFiLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAuZmFiLWJ0bi1zaGFkb3cge1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMTJweDtcclxuICAgIH1cclxuICAgIC5mYWItYnRuIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB3aWR0aDo1NjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBoZWlnaHQ6NTY7XHJcbiAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MzIzYztcclxuICAgICAgZm9udC1zaXplOiAyNDtcclxuICAgIH1cclxuICAgIC5mYWItYnRuLXNoYWRvdyB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDY1O1xyXG4gICAgfVxyXG4gICAgLmZhYi1idG4uc21hbGwge1xyXG4gICAgICB3aWR0aDo0MDtcclxuICAgICAgaGVpZ2h0OjQwO1xyXG4gICAgICBmb250LXNpemU6IDE4O1xyXG4gICAgfVxyXG4gICAgLmZhYi1idG4uZG93biB7XHJcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBkb3duO1xyXG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMnM7XHJcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgfVxyXG4gICAgLmZhYi1idG4tdGV4dCB7XHJcbiAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzY7XHJcbiAgICAgIG1hcmdpbi10b3A6LTQ7XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIGRvd24ge1xyXG4gICAgICBmcm9tIHsgYmFja2dyb3VuZC1jb2xvcjogIzI5MzIzYzsgfVxyXG4gICAgICB0byB7IGJhY2tncm91bmQtY29sb3I6ICM0ODU1NjM7ICB9XHJcbiAgICB9XHJcbiAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZhYkJ0bkNvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSBfaWNvbjogYW55ID0gJyc7XHJcbiAgcHJpdmF0ZSBfY2xhc3NOYW1lOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgQElucHV0KCkgc2V0IGljb24obmFtZSkge1xyXG4gICAgdGhpcy5faWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUobmFtZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgaWNvbigpIHtcclxuICAgIHJldHVybiB0aGlzLl9pY29uO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgc2V0IGNsYXNzTmFtZShjbGFzc05hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNsYXNzTmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jbGFzc05hbWU7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgc3VibWl0OiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIHB1YmxpYyBvbkxvYWRlZChhcmdzKSB7XHJcbiAgICBsZXQgdG5zVmlldyA9IDxhbnk+YXJncy5vYmplY3Q7IC8vVGhpcyBpcyB0aGUgb3V0ZXIgU3RhY2tMYXlvdXRcclxuICAgIGlmICh0bnNWaWV3LmFuZHJvaWQpIHtcclxuICAgICAgbGV0IG5hdGl2ZUFuVmlldyA9IHRuc1ZpZXcuYW5kcm9pZDtcclxuICAgICAgdmFyIHNoYXBlID0gbmV3IGFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuR3JhZGllbnREcmF3YWJsZSgpO1xyXG4gICAgICBzaGFwZS5zZXRTaGFwZShhbmRyb2lkLmdyYXBoaWNzLmRyYXdhYmxlLkdyYWRpZW50RHJhd2FibGUuT1ZBTCk7XHJcbiAgICAgIHNoYXBlLnNldENvbG9yKGFuZHJvaWQuZ3JhcGhpY3MuQ29sb3IucGFyc2VDb2xvcignIzMwYmNmZicpKTtcclxuICAgICAgbmF0aXZlQW5WaWV3LnNldEJhY2tncm91bmREcmF3YWJsZShzaGFwZSk7XHJcbiAgICAgIG5hdGl2ZUFuVmlldy5zZXRFbGV2YXRpb24oMjApO1xyXG4gICAgfSBlbHNlIGlmICh0bnNWaWV3Lmlvcykge1xyXG4gICAgICBsZXQgbmF0aXZlVmlldyA9IHRuc1ZpZXcuaW9zO1xyXG4gICAgICBuYXRpdmVWaWV3LmxheWVyLnNoYWRvd0NvbG9yID0gbmV3IENvbG9yKCcjODg4ODg4JykuaW9zLkNHQ29sb3I7XHJcbiAgICAgIG5hdGl2ZVZpZXcubGF5ZXIuc2hhZG93T2Zmc2V0ID0gQ0dTaXplTWFrZSgwLCAyLjApO1xyXG4gICAgICBuYXRpdmVWaWV3LmxheWVyLnNoYWRvd09wYWNpdHkgPSAwLjU7XHJcbiAgICAgIG5hdGl2ZVZpZXcubGF5ZXIuc2hhZG93UmFkaXVzID0gNS4wO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uVG91Y2goYXJncykge1xyXG4gICAgbGV0IHRoZUJ0biA9IGFyZ3MudmlldztcclxuICAgIHRoaXMuc3VibWl0LmVtaXQoJ3RvdWNoZWQnKTtcclxuICAgIHRoZUJ0bi5jbGFzc05hbWUgPSBhcmdzLmFjdGlvbiA9PT0gJ2Rvd24nID8gYGZhYi1idG4gZG93biAke3RoaXMuY2xhc3NOYW1lfWAgOiBgZmFiLWJ0biAke3RoaXMuY2xhc3NOYW1lfWBcclxuICB9XHJcbn1cclxuIl19