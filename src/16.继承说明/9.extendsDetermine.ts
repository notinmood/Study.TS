/**
 * @file   : 9.more.ts
 * @time   : 15:54
 * @date   : 2025/2/13
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
import { Human } from "../00.res/Human";
import { Worker } from "../00.res/Worker";

export default {
    name: "9.类型兼容性判断",
    description: "判断一个类是否是另一个类的子类",
};

/**
 * 判断一个类是否是另一个类的子类
 * @param subclass
 * @param superclass
 * @returns {boolean}
 * @example
 * isSubclass(Worker, Human) // true
 */
// noinspection all
function isSubclass<T, U>(subclass: new (...args: any[]) => T, superclass: new (...args: any[]) => U): boolean {
    // 检查 subclass 的原型是否为 superclass 的实例
    return subclass.prototype instanceof superclass;
}

if (isSubclass(Worker, Human)) {
    console.log("Worker extends Human");
} else {
    console.log("Worker not extends Human");
}

// 等价于
if (Worker.prototype instanceof Human) {
    console.log("Worker extends Human");
} else {
    console.log("Worker not extends Human");
}
