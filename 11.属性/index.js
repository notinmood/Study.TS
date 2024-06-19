"use strict";
/**
 * @file   : index.ts
 * @time   : 13:32
 * @date   : 2022/4/21
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Foo = void 0;
var Foo = /** @class */ (function () {
    function Foo(_name) {
        this._name = _name;
    }
    Object.defineProperty(Foo.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return Foo;
}());
exports.Foo = Foo;
var foo = new Foo("qingdao");
foo.name = "beijing";
console.log(foo.name);
