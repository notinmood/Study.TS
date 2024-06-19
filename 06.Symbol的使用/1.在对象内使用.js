"use strict";
// +--------------------------------------------------------------------------
// |::说明·| symbol 类型的属性名称，一定要用[]定义和调用，[]内的名称不能有引号（否则就是普通字符串类型的属性名称了）。
// +--------------------------------------------------------------------------
var _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.obj = void 0;
var sym = Symbol();
exports.obj = (_e = {},
    _e[sym] = "value",
    _e.xx = "abc",
    _e);
console.log(exports.obj[sym]); // "value"
console.log(exports.obj["xx"]); // "abc"
