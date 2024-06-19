"use strict";
/**
 * @file   : 1.对两种数据类型模式使用typeof的不同.ts
 * @time   : 7:51
 * @date   : 2022/4/30
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNameSpace = void 0;
var MyNameSpace;
(function (MyNameSpace) {
    var data_s = "value";
    var data_SS = new String("qingdao");
    // typeof 对基础类型进行运算后，返回的是字面量类型
    if (typeof data_s == "string") {
    }
    /**
     * == 后面的字符串字面量类型只能是“string”、“number”等确定的几个值。以下代码会抛出错误。
     * TS2367: This condition will always return 'false' since the types '"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"' and '"abc"' have no overlap.
     */
    // if (typeof data_s == "abc") {
    //
    // }
})(MyNameSpace || (exports.MyNameSpace = MyNameSpace = {}));
