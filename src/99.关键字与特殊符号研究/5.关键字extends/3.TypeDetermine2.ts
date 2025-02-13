/**
 * @file   : 5.使用extends做类型关系判断.ts
 * @time   : 15:30
 * @date   : 2022/4/26
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "3.extends用于类型关系判断",
    description: "结合泛型一起使用extends关键字做类型关系判断",
};

// // 类型兼容性判断通常结合泛型一起使用
// function doSomething<T>(x: T) {
//     type myType = T extends string ? string[] : number[];
//
//     // TODO:xiedali@2022/4/29 奇怪怎么为其赋值。需要使用 infer？
//     // let myName: myType = "ok";
//     // let myName: myType = ["value"];
// }
//
// const myName = doSomething("qingdao");
