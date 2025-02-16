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
    description: "使用console.dir()打印复杂对象",
};

//TODO:xiedali@2025/02/16 需要换成复杂对象
import { Human } from "../00.res/Human";

const john = new Human();
john.name = "John";

console.log(john);
console.log(Human);

console.dir(john);
console.dir(Human);
