/**
 * @file   : 01.定义函数对象-vs-定义函数类型.ts
 * @time   : 08:15
 * @date   : 2025/2/15
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "01.定义函数对象-vs-定义函数类型",
    description:
        "定义函数类型的时候，只有函数的签名，没有函数体，即没有具体地实现。定义函数对象的时候，有函数体，即具体地实现了函数的功能。",
};

/**
 * 对比通过箭头方式定义的函数对象和函数类型
 * 定义函数类型的时候，只有函数的签名，没有函数体，即没有具体地实现。
 * 定义函数对象的时候，有函数体，即具体地实现了函数的功能。
 */

// 定义函数类型（定义函数类型时，要确定函数签名，即指定参数和返回值情况）
type SayHelloFuncType = (name: string) => void;

// 1.1 函数对象可以直接定义（传统的实现方式）
const sayHelloFuncObj = (name: string) => {
    console.log("Hello, " + name + "!");
};

// 1.2 函数对象可以通过函数类型来定义
// 定义函数类型变量
let sayHelloFuncType: SayHelloFuncType;

// 给函数类型变量赋值
// eslint-disable-next-line prefer-const
sayHelloFuncType = function (name: string) {
    console.log("Hello, " + name + "!");
};

// 调用函数对象
sayHelloFuncObj("myFuncObj"); // Hello, myFuncObj!

// 调用通过函数类型生成的函数对象
sayHelloFuncType("myFuncType"); // Hello, myFuncType!
