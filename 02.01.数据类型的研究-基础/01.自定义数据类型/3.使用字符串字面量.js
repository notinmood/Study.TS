"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNameSpace = void 0;
var MyNameSpace;
(function (MyNameSpace) {
    // +--------------------------------------------------------------------------
    // |::说明·| 1. 传统声明变量的方法--通过内置的数据类型，声明变量。
    // +--------------------------------------------------------------------------
    var myData;
    myData = "abc"; //通过sting定义的变量，可以赋值任意字符串。
    // +--------------------------------------------------------------------------
    // |::说明·| 2. 声明一个变量，他的类型为 字符串 “foo”(如果给这个变量赋值其他字符串就不再可以了)
    // +--------------------------------------------------------------------------
    var myValue;
    myValue = "foo";
    var myXX;
    myXX = "foo";
    var myYY;
    myYY = "foo"; // 这三个值就可以任意取了。
    myYY = "moo"; // 这三个值就可以任意取了。
    myYY = "bar"; // 这三个值就可以任意取了。
})(MyNameSpace || (exports.MyNameSpace = MyNameSpace = {}));
