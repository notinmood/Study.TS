/**
 * @file   : 应用类型和值类型的判断.js
 * @time   : 21:16
 * @date   : 2022/2/27
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "01.local-using",
    description: "引用类型和值类型的判断(本地判断)",
};

/* eslint-disable-next-line */
function isReferenceType(value: any) {
    return value instanceof Object;
}

console.log(isReferenceType(123)); //false
console.log(isReferenceType(true)); //false
console.log(isReferenceType("123")); //false
console.log(isReferenceType(undefined)); //false
console.log(isReferenceType(Date())); //false

console.log("─────────────────────────────────────");

console.log(isReferenceType(function doSomething() {})); //true
console.log(isReferenceType(new Date())); //true
console.log(isReferenceType({})); //true
console.log(isReferenceType([])); //true

console.log("─────────────────────────────────────");

console.log(isReferenceType(Number(123))); //false
// noinspection all
console.log(isReferenceType(new Number(123))); //true

console.log("─────────────────────────────────────");

// 在 JavaScript 中，typeof null 返回 "object" 是历史遗留问题（ECMAScript 规范错误）。
// 但null本身是 primitive type，值类型。
console.log(typeof null); //object
console.log(isReferenceType(null)); //false
