"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.President = void 0;
var Human_1 = require("./Human");
// +--------------------------------------------------------------------------
// |::说明·| 通过模块构造类型的例子
// +--------------------------------------------------------------------------
var President = /** @class */ (function (_super) {
    __extends(President, _super);
    function President(name, nation) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.nation = nation;
        return _this;
    }
    President.prototype.say = function () {
        console.log("\u6211\u662F".concat(this.nation, "\u7684\u603B\u7EDF").concat(this.name, "\uFF01"));
    };
    return President;
}(Human_1.Human));
exports.President = President;
