"use strict";
/**
 * @file   : 2.1.高级.通用签名和专项签名.ts
 * @time   : 7:02
 * @date   : 2022/5/1
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNameSpace = void 0;
var MyNameSpace;
(function (MyNameSpace) {
    var myData = {
        id: 20,
        name: "zhangsan",
    };
    var myTarget;
    /**
     * 变量 myValue1 满足类型 myType 的签名，可以赋值给类型 myType 的变量 myTarget
     */
    var myValue1 = { id: 21, name: "lisi" };
    myTarget = myValue1;
    /**
     * 变量 myValue2 不满足类型 myType 的签名，所以不可以赋值给类型 myType 的变量 myTarget
     */
    var myValue2 = { id: 22, age: 20 };
    // myTarget= myValue2;
})(MyNameSpace || (exports.MyNameSpace = MyNameSpace = {}));
