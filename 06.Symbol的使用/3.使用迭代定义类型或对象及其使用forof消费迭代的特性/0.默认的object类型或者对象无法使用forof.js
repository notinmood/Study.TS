"use strict";
/**
 * @file   : 0..ts
 * @time   : 8:59
 * @date   : 2022/4/26
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.myObject = void 0;
exports.myObject = { a: "AA", b: 123, c: true };
// // 以下代码会报错
// for (const myObjectElement of myObject) {
//     console.log(myObjectElement);
// }
for (var myObjectKey in exports.myObject) {
    console.log("-- ".concat(myObjectKey, " \u5BF9\u5E94\u7684\u503C\u4E3A ").concat(exports.myObject[myObjectKey]));
}
