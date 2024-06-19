"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNameSpace = void 0;
/**
 * @file   : 5.使用extends做类型关系判断.ts
 * @time   : 15:30
 * @date   : 2022/4/26
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
var MyNameSpace;
(function (MyNameSpace) {
    //1. 最基本的 类型兼容性判断
    var myVar1 = true;
    //如下将一个 false 值，赋给 类型为 true 的常量肯定编译无法通过。
    // const myVar2: myType = false;
    //2. 类型兼容性判断通常结合泛型一起使用
    function doSomething(x) {
        // TODO:xiedali@2022/4/29 奇怪怎么为其赋值。需要使用 infer？
        // let myName: myType = "ok";
        // let myName: myType = ["value"];
    }
    var myName = doSomething("qingdao");
})(MyNameSpace || (exports.MyNameSpace = MyNameSpace = {}));
