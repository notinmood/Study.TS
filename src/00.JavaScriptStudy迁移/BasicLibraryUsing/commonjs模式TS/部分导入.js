/**
 * @file   : 部分导入.js
 * @time   : 11:14
 * @date   : 2022/2/21
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

const {StringHelper} = require("basiclibrary.ts/lib/index");


let myData = "qingdao city";
let result = StringHelper.getSubString(myData, 3);
console.log(result);