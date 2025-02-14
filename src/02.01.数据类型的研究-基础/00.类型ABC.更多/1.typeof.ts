/**
 * @file   : typeOf的使用.ts
 * @time   : 12:24
 * @date   : 2022/4/23
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

import { Worker } from "../../00.res/Worker";

export default {
    name: "1.typeof的使用",
    describe: "typeof的作用是获取一个变量的类型",
};

// eslint-disable-next-line
let key: any = 123;
console.log(typeof key); //number

key = "qingdao";
console.log(typeof key); //string

key = {};
console.log(typeof key); //object

key = new Date();
console.log(typeof key); //object

key = new Worker("zhangsan", "HR");
console.log(typeof key); //object

// 更多 typeof 的使用参见 99.特殊符号研究\7.关键字typeof
