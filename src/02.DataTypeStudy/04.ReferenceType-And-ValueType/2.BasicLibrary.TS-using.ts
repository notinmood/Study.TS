/**
 * @file   : 2.BasicLibrary.JavaScript判断-引用类型和值类型.js
 * @time   : 10:05
 * @date   : 2022/3/5
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "2.BasicLibrary.TS-using",
    description: "引用类型和值类型的判断(调用类库判断)",
};

import { TypeHelper } from "basiclibrary.ts/lib/data/typeHelper";

let myData: boolean = false;

myData = TypeHelper.isReferenceType(123);
console.log(myData); // false

myData = TypeHelper.isReferenceType("123");
console.log(myData); // false

myData = TypeHelper.isReferenceType(true);
console.log(myData); // false

/**
 * 普通的 Date() 函数返回的是一个字符串，肯定是值类型
 */
myData = TypeHelper.isReferenceType(Date());
console.log(myData); // false

/**
 * 构造函数 new Date() 返回的是 date对象，肯定是引用类型
 */
myData = TypeHelper.isReferenceType(new Date());
console.log(myData); // true

myData = TypeHelper.isReferenceType([]);
console.log(myData); // true

myData = TypeHelper.isReferenceType({});
console.log(myData); // true
