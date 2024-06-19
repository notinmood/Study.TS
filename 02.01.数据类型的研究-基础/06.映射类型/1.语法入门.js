"use strict";
/**
 * @file   : 2.映射类型[ K in keyof T].ts
 * @time   : 22:54
 * @date   : 2022/4/29
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNameSpace = void 0;
// +--------------------------------------------------------------------------
// |::说明·| 固定的语法 [K in keyof T] ，K表示全部 T 中的键被拆分成的一个个键。
//  它的语法与索引签名的语法类型，内部使用了 for .. in。 具备三个部分：
//  1. 类型变量 K，它会依次绑定到每一个属性。
//  2. 字符串字面量联合的 Keys，它包含了要迭代的属性名的集合。
//  3. 属性的结果类型。
// +--------------------------------------------------------------------------
var MyNameSpace;
(function (MyNameSpace) {
    var someData = {
        obj: {
            one: 1
        },
        num: 2
    };
})(MyNameSpace || (exports.MyNameSpace = MyNameSpace = {}));
