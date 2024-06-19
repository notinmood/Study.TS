"use strict";
/**
 * @file   : 3.函数参数的解构.ts
 * @time   : 11:03
 * @date   : 2022/4/19
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNameSpace = void 0;
var MyNameSpace;
(function (MyNameSpace) {
    //这时候 a 就是 string 类型，b 就是 number 类型
    function f(_e) {
        var a = _e.a, b = _e.b;
        console.log(a);
        console.log(b);
    }
    var p = { a: "qingdao", b: 2009 };
    f(p);
})(MyNameSpace || (exports.MyNameSpace = MyNameSpace = {}));
