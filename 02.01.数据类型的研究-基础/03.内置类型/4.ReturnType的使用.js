"use strict";
/**
 * @file   : 4.ReturnType的使用.ts
 * @time   : 19:17
 * @date   : 2022/5/4
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNameSpace = void 0;
var MyNameSpace;
(function (MyNameSpace) {
    var add = function (x, y) { return x + y; };
    //以下代码会无法通过编译，因为 string 不满足 ReturnType<T> 对 T 的要求，T 必须为函数
    // type other = ReturnType<string>;
})(MyNameSpace || (exports.MyNameSpace = MyNameSpace = {}));
