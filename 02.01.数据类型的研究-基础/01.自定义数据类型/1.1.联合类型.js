"use strict";
// +--------------------------------------------------------------------------
// |::说明·| 使用 | 定义一个新的类型
// +--------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNameSpace = void 0;
var MyNameSpace;
(function (MyNameSpace) {
    // 方法1. 直接使用 | 为变量定义两个可选的类型。
    var value00;
    value00 = 'value';
    value00 = 123;
    var valueAA;
    valueAA = 'value';
    valueAA = 123;
})(MyNameSpace || (exports.MyNameSpace = MyNameSpace = {}));
