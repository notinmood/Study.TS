/**
 * @file   : 5.使用extends做类型关系判断.ts
 * @time   : 15:30
 * @date   : 2022/4/26
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

import { Human } from "../../00.res/Human";
import { Worker } from "../../00.res/Worker";

export default {
    name: "2.【条件类型】extends用于类型关系判断",
    description: "使用extends做最基本的类型兼容性判断",
};

//1. 使用 extends 做类型关系判断,判断语句不能作为表达式出现在if语句中，否则会报错。
// if(Worker extends Human){
//     console.log("Worker extends Human");
// }else{
//     console.log("Worker not extends Human");
// }

//2. 使用 extends 做类型关系判断,判断语句只可以是赋值语句，不能是表达式；并且结果只能赋值给类型，不能赋值给变量。
type _type = Worker extends Human ? true : false; // true
const myVar: _type = true;
console.log(myVar); // true

//3. 扩展使用
/**
 * 因为 string 肯定兼容于 string | number，所以类型 myType 肯定是一个字面量为 true 的类型
 */
type myType = string extends string | number ? true : false; // true

const myVar1: myType = true;
console.log(myVar1); // true
//如下将一个 false 值，赋给 类型为 true 的常量肯定编译无法通过。
// const myVar2: myType = false;
