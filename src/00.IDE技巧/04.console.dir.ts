/**
 * @file   : 01.using-more.ts
 * @time   : 10:19
 * @date   : 2025/2/16
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "02.console.dir",
    description:
        "在node.js中使用console.dir()和console.log()效果相同，但在web浏览器中，console.dir()可以打印出对象的所有属性和方法。",
};

// 1. 简单类型
console.log("hello world");
console.dir("hello world");

// 2. 复杂类型
console.log(Math.PI);
console.dir(Math.PI);

console.log(Promise);
console.dir(Promise);

// 3. 自定义类型
import { Human } from "../00.res/Human";
const john = new Human();
john.name = "John";

console.log(john);
console.dir(john);

console.log(Human);
console.dir(Human);
