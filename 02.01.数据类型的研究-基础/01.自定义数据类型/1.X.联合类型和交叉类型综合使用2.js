"use strict";
/**
 * @file   : 1.X.联合类型和交叉类型综合使用2.ts
 * @time   : 8:58
 * @date   : 2022/5/18
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNameSpace = void 0;
var MyNameSpace;
(function (MyNameSpace) {
    var xPoint = {
        xv: 123,
        id: 123,
        myName: "i am x",
    };
    var yPoint = {
        yv: "123",
        code: "qingdao",
        myName: "i am y",
    };
    var xuy;
    // 把 A 或者 B 的实例，都可以赋值给联合后的类型变量
    xuy = xPoint;
    xuy = yPoint;
    xuy = __assign(__assign({}, xPoint), yPoint);
    var xny;
    // A 或者 B 的实例，都无法赋值给交叉后的类型变量
    // xny = xPoint;
    // xny = yPoint;
    // 只有同时包含了 A 和 B 类型的成员才能赋值给交叉类型的变量
    xny = __assign(__assign({}, xPoint), yPoint); //...是解构语法
    function using交叉类型(p) {
        console.log(p.myName);
        console.log(p.id);
        console.log(p.code);
        console.log(p.xv);
        console.log(p.yv);
    }
    function using联合类型(p) {
        // 只有 A、B 内共同含有的属性才可以访问
        console.log(p.myName);
        // 其他各种只属于 A 或者只属于 B 的属性无法访问
        // console.log(p.id);
        // console.log(p.code);
    }
})(MyNameSpace || (exports.MyNameSpace = MyNameSpace = {}));
