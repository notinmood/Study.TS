/**
 * @file   : 01.using-more.ts
 * @time   : 10:19
 * @date   : 2025/2/16
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "03.console.log",
    description: "使用console.log()快速打印对象基本信息",
};

import { Human } from "../00.res/Human";

const john = new Human();
john.name = "John";

console.log(john);
console.log(Human);

console.dir(john);
console.dir(Human);
