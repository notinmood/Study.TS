"use strict";
/**
 * @file   : 1.普通构造函数.ts
 * @time   : 11:46
 * @date   : 2022/4/21
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Foo = void 0;
var Foo = /** @class */ (function () {
    function Foo(name) {
        this.name = name;
    }
    Foo.prototype.getName = function () {
        return this.name;
    };
    return Foo;
}());
exports.Foo = Foo;
var foo = new Foo("qingdao");
console.log(foo.getName());
