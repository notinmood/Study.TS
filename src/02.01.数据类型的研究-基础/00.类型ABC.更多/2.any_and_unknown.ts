/**
 * @file   : 2.any和unknown.ts
 * @time   : 18:44
 * @date   : 2022/5/4
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

/**
 * any 和 unknown 都是超级类型：其他所有的类型实例都可以赋值给这两个类型标识出的变量；
 * 1. 可以给这两个类型标识出的变量赋任何类型的值；
 * 2. 但这两个类型标识出的变量，在其上调用方法的时候，有着不同的表现：
 *    a. any 类型的变量，可以调用任何方法；TypeScript不会进行类型检查，但这个时候需要开发人员自我保证代码的正确性；
 *    b. unknown 类型的变量，任何方法都不能调用；如果要调用，需要进行类型断言或类型判断后，再调用相应的方法。
 */

export default {
    name: "2.any和unknown",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let anyValue: any;
let unknownValue: unknown;

const boolValue: boolean = true;
const numValue: number = 43;
const strValue: string = "Hello world";

// 1. 任何类型都可以赋值给这两个类型的变量
anyValue = numValue;
anyValue = strValue;
anyValue = boolValue;

unknownValue = boolValue;
unknownValue = numValue;
unknownValue = strValue;

// 2.1. any 上可以进行任何操作（TypeScript都不会进行类型检查，但这个时候需要开发人员自我保证代码的正确性）
//// 比如以下代码编译没有问题，但运行会报错。
anyValue.charAt(0);

// 2.2. 在 unknown 上任何方法都不能调用
//// 以下代码，无法编译通过
// unknownValue.toString();

// 如果要调用unknown 类型变量的方法，可以通过类型断言后，再进行调用
const myName: string = (unknownValue as string).charAt(0);
console.log(myName);

// 或者通过 类型判断进行收窄(类型窄化（Type Narrowing）)处理后使用
if (typeof unknownValue == "string") {
    unknownValue.charAt(0);
}
