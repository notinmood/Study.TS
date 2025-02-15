/**
 * @file   : 01.Function-and-TypeSafe.ts
 * @time   : 08:46
 * @date   : 2025/2/14
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "02.Function类型与类型安全的函数签名",
    description:
        "如果使用Function类型的参数，那么就可以给这个参数传入任意类型的函数，这就可能导致运行时错误。推荐使用函数签名来表示函数的类型，这样就提供了类型安全的函数调用，可以避免这种错误。",
};

// 0. 定义一个函数，期望传入一个参数
const greet = (name: string) => `Hello, ${name}!`;

//1. 非类型安全的函数调用
/* eslint-disable-next-line */
function callFunction(fn: Function) {
    const result = fn(); // 理论上可以调用，但实际运行时可能出错
    console.log(result);
}

callFunction(greet); // 报错：这里没有传入参数，但 TypeScript 没有警告

//2. 类型安全的函数调用
function callFunctionSafe(fn: (name: string) => string) {
    const result = fn("World"); // 正确调用
    console.log(result);
}

callFunctionSafe(greet); // 正确调用
