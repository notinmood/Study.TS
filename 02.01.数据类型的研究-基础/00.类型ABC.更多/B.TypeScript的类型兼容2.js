"use strict";
/**
 * @file   : B.TypeScript的类型兼容2.ts
 * @time   : 10:31
 * @date   : 2022/4/30
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNameSpace = void 0;
/**
 * @file   : B.TypeScript的类型兼容.ts
 * @time   : 10:22
 * @date   : 2022/4/30
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
// TypeScript里的类型兼容性是基于结构的:
// 如果两个类型的结构是兼容的，那么无论这两个类型是否有继承派生关系，他们都是兼容的。
var MyNameSpace;
(function (MyNameSpace) {
    var Cat = /** @class */ (function () {
        function Cat() {
            this.name = "cat";
        }
        Cat.prototype.walk = function () {
            console.log("cat walk.");
        };
        return Cat;
    }());
    var KittyCat = /** @class */ (function () {
        function KittyCat() {
            this.name = "KittyCat";
        }
        KittyCat.prototype.walk = function () {
            console.log("KittyCat walk.");
        };
        KittyCat.prototype.play = function () {
            console.log("play");
        };
        return KittyCat;
    }());
    /**
     * 1. 因为类型 KittyCat 兼容于类型 Cat，
     * 因此虽然是用类型 Cat 声明的变量 a，但赋值的时候依然可以用 KittyCat 的实例；
     */
    var a;
    a = new Cat();
    a = new KittyCat();
    /**
     * 2. 因为类型 Cat 不兼容于类型 KittyCat，
     * 因此是用类型 KittyCat 声明的变量 b，但不能用 Cat 的实例进行赋值；
     */
    var b;
    b = new KittyCat();
    // 以下代码会报错
    // b = new Cat();
})(MyNameSpace || (exports.MyNameSpace = MyNameSpace = {}));
