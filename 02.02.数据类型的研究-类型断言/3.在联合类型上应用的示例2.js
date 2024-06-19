/**
 * @file   : aa.ts
 * @time   : 8:22
 * @date   : 2022/4/23
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.run = function () {
        console.log("running...");
    };
    return Cat;
}(Animal));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fish.prototype.swim = function () {
        console.log("swimming...");
    };
    return Fish;
}(Animal));
// //  以下代码会报错
// //  error TS2339: Property 'swim' does not exist on type 'Cat | Fish'.
// //  Property 'swim' does not exist on type 'Cat'.
//
// function swim1(animal: Cat | Fish) {
//     if (typeof animal.swim === 'function') {
//         return true;
//     }
//     return false;
// }
function swim2(animal) {
    // 特别注意：可以对任何目标进行 typeof 计算（因为如果标的不存在，typeof就返回 undefined）
    var _name = typeof animal.swim;
    console.log("swim\u7684\u7C7B\u578B\u4E3A".concat(_name));
    if ('swim' in animal) {
        console.log("1.有swim属性！");
    }
    else {
        console.log("NN 1.没有swim属性！");
    }
    if (typeof animal.swim === 'function') {
        console.log("2.有swim属性！");
    }
    else {
        console.log("NN 2.没有swim属性！");
    }
    if (typeof animal['swim'] === 'function') {
        return true;
    }
    else {
        return false;
    }
}
// 调用
var animal;
animal = new Cat();
console.log(swim2(animal));
console.log('─────────────────────────────────────');
animal = new Fish();
console.log(swim2(animal));
