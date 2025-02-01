/**
 * @file   : 2.使用setProtoTypeOf方法.js
 * @time   : 9:50
 * @date   : 2022/4/14
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

let objectA = {};
let objectB = {
    a: "AA",
    b: "BB",
    c: "CC",
};

Object.setPrototypeOf(objectA, objectB);

// 1.直接访问对象objectA，其为空对象{}
console.log(objectA);//{}

// 2.但访问原型链上的属性，可以得到值
let vb = objectA.b; //BB
console.log(vb);

// 3.也可以使用解构赋值的方法，直接获取的原型链上的属性值
let {b} = objectA;
console.log(b);//BB

//--------------------------
// 以下是获取普通对象的原型的方式
let pto1= Object.getPrototypeOf(objectA);
console.log(pto1);//{a: "AA", b: "BB", c: "CC"}

let pto2= objectA.__proto__;
console.log(pto2);//{a: "AA", b: "BB", c: "CC"}

// 4.普通对象的构造函数，其原型prototype属性为{}
let pto3= objectA.constructor.prototype;
console.log(pto3);//{}
