"use strict";
/**
 * @file   : 1.入门.ts
 * @time   : 20:23
 * @date   : 2022/4/30
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNameSpace = void 0;
// eslint-disable-next-line @typescript-eslint/no-namespace
var MyNameSpace;
(function (MyNameSpace) {
    //══ 1. 简单的索引签名════════════════════════
    var foo = {};
    var bar = {};
    // 储存的东西必须符合结构
    foo["a"] = { message: 'some message' };
    bar["age"] = 20;
    var myData = {
        name: "zhangsan",
    };
    var myTarget;
    /**
     * 变量 myValue1 满足类型 myType 的签名，可以赋值给类型 myType 的变量 myTarget
     */
    var myValue1 = { city: "lisi" };
    myTarget = myValue1;
    /**
     * 变量 myValue2 不满足类型 myType 的签名，所以不可以赋值给类型 myType 的变量 myTarget
     */
    var myValue2 = { age: 20 };
    // myTarget= myValue2;
})(MyNameSpace || (exports.MyNameSpace = MyNameSpace = {}));
