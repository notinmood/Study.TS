/**
 * @file   : 01.get-type.ts
 * @time   : 11:25
 * @date   : 2025/2/16
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: Do More,Do Better!
 */
/* eslint-disable */

export default {
    name: "01.生成或者获取类型",
    description: "学习如何生成或者获取类型",
};

/**
 * 结论：typeof 运算符可以用来获取类型：
 * 1. 但是 typeof 运算符对简单类型来说意义不大；
 * 2. 而对于复杂类型来说，typeof 运算符可以获取类型的信息，比较适合于获取类型信息的场景。
 */

// 1. 对基本类型和基本类型的对象使用 typeof 运算
const dataNum = 123;
type typeofNum1 = typeof dataNum; // 123
type typeofNum2 = typeof Number; // NumberConstructor

const dataString = "hello";
type typeofString1 = typeof dataString; // "hello"
type typeofString2 = typeof String; // StringConstructor

const dataBool = true;
type typeofBool1 = typeof dataBool; // true
type typeofBool2 = typeof Boolean; // BooleanConstructor

const dataUndefined = undefined;
type typeofUndefined1 = typeof dataUndefined; // undefined
type typeofUndefined2 = typeof undefined; // any

// 2. 对引用类型和引用类型的对象使用 typeof 运算
const dataArray = [1, 2, 3];
type typeofArray1 = typeof dataArray; // number[]
type typeofArray2 = typeof Array; // ArrayConstructor

const dataObject = {name: "ShanDong", age: 25};
type typeofObject1 = typeof dataObject; // { name: string; age: number; }
type typeofObject2 = typeof Object; // ObjectConstructor

const dataFunction = function () {
    console.log("hello");
};
type typeofFunction1 = typeof dataFunction; // () => void
type typeofFunction2 = typeof Function; // FunctionConstructor

type typeofConsoleLog = typeof console.log; // (...data: any[]) => void

// 3. 对自定义类型使用 typeof 运算
import { Student } from "../../00.res/Student";
const student = new Student("zhangsan");
type typeofStudent1 = typeof student; // Student
type typeOfStudent2 = typeof Student; // Student



