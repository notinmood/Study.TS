"use strict";
/**
 * @file   : 2.any和unknown.ts
 * @time   : 18:44
 * @date   : 2022/5/4
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNameSpace = void 0;
/**
 * any 和 unknown 都是超级类型：其他所有的类型实例都可以赋值给 这两个类型标识出的变量；
 * 但是在 any 上可以调用任何方法；在 unknown 上任何方法都不能调用。
 */
var MyNameSpace;
(function (MyNameSpace) {
    var anyValue;
    var unknownValue;
    var boolValue = true;
    var numValue = 43;
    var strValue = "Hello world";
    // 1. 任何类型都可以赋值给这两个类型的变量
    anyValue = numValue;
    anyValue = strValue;
    anyValue = boolValue;
    unknownValue = boolValue;
    unknownValue = numValue;
    unknownValue = strValue;
    // 2.1. any 上可以进行任何操作（TypeScript都不会进行类型检查，但这个时候需要开发人员自我包装代码的正确性）
    //// 比如以下代码编译没有问题，但运行会报错。
    anyValue.charAt(0);
    // 2.2. 在 unknown 上任何方法都不能调用
    //// 以下代码，无法编译通过
    // unknownValue.toString();
    // unknown 类型的变量，可以通过类型断言后，再调用相应的方法
    var myName = unknownValue.charAt(0);
    console.log(myName);
    // 或者通过 类型判断进行收窄(类型窄化（Type Narrowing）)处理后使用
    if (typeof unknownValue == "string") {
        unknownValue.charAt(0);
    }
})(MyNameSpace || (exports.MyNameSpace = MyNameSpace = {}));
