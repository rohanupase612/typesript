var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Addition = /** @class */ (function () {
    function Addition() {
    }
    Addition.prototype.add = function (no1, no2) {
        console.log("parent");
        return no1 + no2;
    };
    return Addition;
}());
var Trial = /** @class */ (function (_super) {
    __extends(Trial, _super);
    function Trial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Trial.prototype.add = function (no1, no2) {
        console.log("child");
        return no1 + no2;
    };
    return Trial;
}(Addition));
var t = new Trial;
t = new Addition();
console.log(t.add(10, 20));
