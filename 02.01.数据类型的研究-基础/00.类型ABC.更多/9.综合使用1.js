"use strict";
/**
 * @file   : 9.综合.ts
 * @time   : 23:22
 * @date   : 2022/4/29
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNameSpace = void 0;
var MyNameSpace;
(function (MyNameSpace) {
    /**
     * 复杂类型即使声明为 const,也需要再次 as const 才能保证成员的值为字面量类型;
     * 如果是简单类型,直接声明为 const，就可以保证其值为字面量类型。
     */
    var a = {
        a: '1',
        b: '2',
        c: '3',
    };
    // 以下代码就会报错
    // const myName: forC = "value";
})(MyNameSpace || (exports.MyNameSpace = MyNameSpace = {}));
