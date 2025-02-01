/**
 * @file   : require_01.js
 * @time   : 10:33
 * @date   : 2022/4/1
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

const a = require("./exports_02a.js");
const b = require("./exports_02b.js");

console.log(a);
a.foo();

console.log(b);//{}
// b.foo(); // 报错，因为b没有foo方法