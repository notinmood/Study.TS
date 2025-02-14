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

// 如果直接指定subclass和superclass的类型为T和U，接下来代码中就无法对类型做更多的操作，比如调用类型的原型等。
// function isSubclassNG<T, U>(subclass: T, superclass: U): boolean {
//     // 检查 subclass 的原型是否为 superclass 的实例
//     return subclass.prototype instanceof superclass; // 会报错，因为不能对普通类型的对象求原型等更多的操作
// }
