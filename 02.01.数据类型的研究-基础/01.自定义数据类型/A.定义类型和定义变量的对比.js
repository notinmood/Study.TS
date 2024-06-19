"use strict";
/**
 * @file   : A.定义类型和定义变量的对比.ts
 * @time   : 17:51
 * @date   : 2022/5/6
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNameSpace = void 0;
// +--------------------------------------------------------------------------
// |::说明·| 定义函数的时候，可以先定义类型再去定义函数和执行函数；也可以直接定义函数和执行函数
// +--------------------------------------------------------------------------
var MyNameSpace;
(function (MyNameSpace) {
    var myFunc1 = function (x, y) {
        return "hello,".concat(x, " ").concat(y.toString());
    };
    var result = myFunc1("qingdao", 1908);
    console.log(result);
    //2. 直接定义函数和执行函数
    var myFunc2 = function (input) {
        return "\u8F93\u5165\u7684\u4FE1\u606F\u4E3A".concat(input.toString());
    };
    console.log(myFunc2(123));
})(MyNameSpace || (exports.MyNameSpace = MyNameSpace = {}));
