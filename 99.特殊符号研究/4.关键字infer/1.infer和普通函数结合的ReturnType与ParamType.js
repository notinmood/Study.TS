"use strict";
/**
 * @file   : 4.ReturnType和infer.ts
 * @time   : 12:10
 * @date   : 2022/4/26
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.M = void 0;
/**
 * infer 一般用于 T 为 function 的泛型中；
 * 用于延时推断函数的参数或者返回值的类型。
 */
var M;
(function (M) {
    var add = function (x, y) { return x + y; };
    var power = function (x) { return x * x; };
})(M || (exports.M = M = {}));
