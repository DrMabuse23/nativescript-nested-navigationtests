"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var MinLengthDirective = MinLengthDirective_1 = (function () {
    function MinLengthDirective() {
    }
    MinLengthDirective.prototype.validate = function (control) {
        return !control.value || control.value.length >= this.minlength ? null : { "minlength": true };
    };
    return MinLengthDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MinLengthDirective.prototype, "minlength", void 0);
MinLengthDirective = MinLengthDirective_1 = __decorate([
    core_1.Directive({
        selector: '[minlength]',
        providers: [{ provide: forms_1.NG_VALIDATORS, useExisting: MinLengthDirective_1, multi: true }]
    }),
    __metadata("design:paramtypes", [])
], MinLengthDirective);
exports.MinLengthDirective = MinLengthDirective;
var IsEmailDirective = IsEmailDirective_1 = (function () {
    function IsEmailDirective() {
    }
    IsEmailDirective.prototype.validate = function (control) {
        var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
        var valid = emailRegEx.test(control.value);
        return control.value < 1 || valid ? null : { 'email': true };
    };
    return IsEmailDirective;
}());
IsEmailDirective = IsEmailDirective_1 = __decorate([
    core_1.Directive({
        selector: '[email]',
        providers: [{ provide: forms_1.NG_VALIDATORS, useExisting: IsEmailDirective_1, multi: true }]
    }),
    __metadata("design:paramtypes", [])
], IsEmailDirective);
exports.IsEmailDirective = IsEmailDirective;
var MinLengthDirective_1, IsEmailDirective_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2YWxpZGF0b3JzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRDtBQUNqRCx3Q0FBMkU7QUFNM0UsSUFBYSxrQkFBa0I7SUFJN0I7SUFBdUIsQ0FBQztJQUVqQixxQ0FBUSxHQUFmLFVBQWdCLE9BQXdCO1FBQ3RDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDakcsQ0FBQztJQUVILHlCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFSVTtJQUFSLFlBQUssRUFBRTs7cURBQW1CO0FBRmhCLGtCQUFrQjtJQUo5QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGFBQWE7UUFDdkIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUscUJBQWEsRUFBRSxXQUFXLEVBQUUsb0JBQWtCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO0tBQ3RGLENBQUM7O0dBQ1csa0JBQWtCLENBVTlCO0FBVlksZ0RBQWtCO0FBZ0IvQixJQUFhLGdCQUFnQjtJQUUzQjtJQUF1QixDQUFDO0lBRWpCLG1DQUFRLEdBQWYsVUFBZ0IsT0FBd0I7UUFDdEMsSUFBSSxVQUFVLEdBQUcseUpBQXlKLENBQUM7UUFDM0ssSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDL0QsQ0FBQztJQUVILHVCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSxnQkFBZ0I7SUFKNUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxTQUFTO1FBQ25CLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLHFCQUFhLEVBQUUsV0FBVyxFQUFFLGtCQUFnQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztLQUNwRixDQUFDOztHQUNXLGdCQUFnQixDQVU1QjtBQVZZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1ttaW5sZW5ndGhdJyxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBNaW5MZW5ndGhEaXJlY3RpdmUsIG11bHRpOiB0cnVlIH1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNaW5MZW5ndGhEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG5cclxuICBASW5wdXQoKSBtaW5sZW5ndGg6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIHB1YmxpYyB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcclxuICAgIHJldHVybiAhY29udHJvbC52YWx1ZSB8fCBjb250cm9sLnZhbHVlLmxlbmd0aCA+PSB0aGlzLm1pbmxlbmd0aCA/IG51bGwgOiB7IFwibWlubGVuZ3RoXCI6IHRydWUgfTtcclxuICB9XHJcblxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tlbWFpbF0nLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTkdfVkFMSURBVE9SUywgdXNlRXhpc3Rpbmc6IElzRW1haWxEaXJlY3RpdmUsIG11bHRpOiB0cnVlIH1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJc0VtYWlsRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIHB1YmxpYyB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcclxuICAgIGxldCBlbWFpbFJlZ0V4ID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC9pO1xyXG4gICAgbGV0IHZhbGlkID0gZW1haWxSZWdFeC50ZXN0KGNvbnRyb2wudmFsdWUpO1xyXG4gICAgcmV0dXJuIGNvbnRyb2wudmFsdWUgPCAxIHx8IHZhbGlkID8gbnVsbCA6IHsgJ2VtYWlsJzogdHJ1ZSB9O1xyXG4gIH1cclxuXHJcbn1cclxuIl19