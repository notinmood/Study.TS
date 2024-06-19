"use strict";
/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2024/5/27 07:54:52
 * @FilePath     : 00.export和export default在被导入时的区别.ts
 * @Description  :
 * Copyright (c) 2024 by Hiland & RainyTop, All Rights Reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.C = exports.b = exports.a = void 0;
exports.a = 1;
function b() {
    console.log("b");
}
exports.b = b;
var C = /** @class */ (function () {
    function C() {
        console.log("C");
    }
    return C;
}());
exports.C = C;
exports.default = {
    xx: 1,
    yy: 2,
    zz: "qingdao",
    hello: function () {
        console.log("hello");
    },
};
