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
 */
// 0. typeof 运算符返回的数据是什么类型？
// typeof 运算符返回的数据类型是 string，它代表了数据类型对应的字符串形式。
const data = 123;
const typeofData = typeof data;
console.log(typeofData); // "number"
console.log(typeof typeofData); // "string"
type typeofData1 = typeof data; // number


// 1. 对基本类型和基本类型的对象使用 typeof 运算
const dataNum = 123;
type typeofNum1 = typeof dataNum; // 123
console.log(typeof dataNum); // "number"
type typeofNum2 = typeof Number; // NumberConstructor
console.log(typeof Number); // "function"

const dataString = "hello";
type typeofString1 = typeof dataString; // "hello"
console.log(typeof dataString); // "string"
type typeofString2 = typeof String; // StringConstructor
console.log(typeof String); // "function"

const dataBool = true;
type typeofBool1 = typeof dataBool; // true
console.log(typeof dataBool); // "boolean"
type typeofBool2 = typeof Boolean; // BooleanConstructor
console.log(typeof Boolean); // "function"

const dataUndefined = undefined;
type typeofUndefined1 = typeof dataUndefined; // undefined
console.log(typeof dataUndefined); // "undefined"
type typeofUndefined2 = typeof undefined; // any
console.log(typeof undefined); // "undefined"

// 2. 对引用类型和引用类型的对象使用 typeof 运算
const dataArray = [1, 2, 3];
type typeofArray1 = typeof dataArray; // number[]
type typeofArray2 = typeof Array; // ArrayConstructor

const dataObject = {name: "ShanDong", age: 25};
type typeofObject1 = typeof dataObject; // { name: string; age: number; }
console.log(typeof dataObject); // "object"
type typeofObject2 = typeof Object; // ObjectConstructor
console.log(typeof Object); // "function"

const dataFunction = function () {
    console.log("hello");
};
type typeofFunction1 = typeof dataFunction; // () => void
console.log(typeof dataFunction); // "function"
type typeofFunction2 = typeof Function; // FunctionConstructor
console.log(typeof Function); // "function"

type typeofConsoleLog = typeof console.log; // (...data: any[]) => void
console.log(typeof console.log); // "function"

// 3. 对自定义类型使用 typeof 运算
import { Student } from "../../00.res/Student";

const student = new Student("zhangsan");
type typeofStudent1 = typeof student; // Student
console.log(typeof student); // "object"
type typeOfStudent2 = typeof Student; // Student
console.log(typeof Student); // "function"



