"use strict";
/**
 * @file   : index.ts
 * @time   : 6:55
 * @date   : 2022/4/20
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNameSpace = void 0;
var MyNameSpace;
(function (MyNameSpace) {
    // +--------------------------------------------------------------------------
    // |::说明·| 特别注意：枚举后面的{}内不是对象的结构形式。
    // +--------------------------------------------------------------------------
    var MyColor;
    (function (MyColor) {
        MyColor[MyColor["Red"] = 0] = "Red";
        MyColor[MyColor["Green"] = 1] = "Green";
        MyColor[MyColor["Yellow"] = 2] = "Yellow";
    })(MyColor || (MyColor = {}));
    console.log(MyColor.Yellow); // 2
    console.log(MyColor['Yellow']); // 2
    console.log(MyColor[2]); // Yellow
    /**
     * 以下是编译后形成的 JavaScript 文件
     */
    // var MyColor;
    // (function (MyColor) {
    //     MyColor[MyColor["Red"] = 0] = "Red";
    //     MyColor[MyColor["Green"] = 1] = "Green";
    //     MyColor[MyColor["Yellow"] = 2] = "Yellow";
    // })(MyColor || (MyColor = {}));
    // console.log(MyColor.Yellow); // 2
    // console.log(MyColor[2]); // Yellow
    /**
     * 枚举量也可以是 字符串
     */
    var Direction;
    (function (Direction) {
        Direction["NORTH"] = "NORTH";
        Direction["SOUTH"] = "SOUTH";
        Direction["EAST"] = "EAST";
        Direction["WEST"] = "WEST";
    })(Direction || (Direction = {}));
    /**
     * 以下是编译后形成的 JavaScript 文件
     */
    // var Direction;
    // (function (Direction) {
    //     Direction["NORTH"] = "NORTH";
    //     Direction["SOUTH"] = "SOUTH";
    //     Direction["EAST"] = "EAST";
    //     Direction["WEST"] = "WEST";
    // })(Direction || (Direction = {}));
})(MyNameSpace || (exports.MyNameSpace = MyNameSpace = {}));
