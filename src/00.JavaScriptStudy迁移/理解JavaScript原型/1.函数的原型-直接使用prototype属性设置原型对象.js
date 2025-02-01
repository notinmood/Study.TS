/**
 * @file   : 1.直接使用构造函数的prototype属性设置原型对象.js
 * @time   : 10:20
 * @date   : 2022/2/23
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// +--------------------------------------------------------------------------
// |::说明·| 每个对象都有一个prototype属性，这是一个标准对象。只要改变这个对象，就改变了对象的原型。
// +--------------------------------------------------------------------------

const Foo = function () {
};

Foo.prototype.data = {a: 1, b: 2};

const f1 = new Foo();
const f2 = new Foo();
const f3 = new Foo();

f1.data.a = 3;

console.log(f2.data.a); // 3　
console.log(f3.data.a); // 3

// 以下是获取函数的原型对象的几种方式
//说明，可以通过以下几种方式获取到对象的原型对象：

// 1. 通过实例对象的__proto__属性（非标准属性，仅供浏览器使用，现在已被弃用）
const pto1 = f1.__proto__;
console.log(pto1); // {data: {a: 3, b: 2}}

// 2. 通过Object.getPrototypeOf()方法
const pto2 = Object.getPrototypeOf(f1);
console.log(pto2); // {data: {a: 3, b: 2}}

// 3. 通过构造函数的prototype属性
const pto3 = Foo.prototype;
console.log(pto3); // {data: {a: 3, b: 2}}

// 4. 通过Object.prototype.isPrototypeOf()方法
const pto4 = f1.constructor.prototype;
console.log(pto4); // {data: {a: 3, b: 2}}

