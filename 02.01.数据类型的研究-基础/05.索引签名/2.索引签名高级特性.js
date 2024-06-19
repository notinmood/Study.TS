"use strict";
/**
 * @file   : 2.索引签名高级特性.ts
 * @time   : 20:53
 * @date   : 2022/4/30
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNameSpace = void 0;
var MyNameSpace;
(function (MyNameSpace) {
    // +--------------------------------------------------------------------------
    // |::说明·| 1. 使用一组有限的字符串字面量作为索引
    // +--------------------------------------------------------------------------
    var good = { b: 1, c: 2 };
    // Error:
    // `{ b: 1, c: 2, d: 3 }` 不能分配给 'FromIndex'
    // 对象字面量只能指定已知类型，'d' 不存在 'FromIndex' 类型上
    //const bad: FromIndex = {b: 1, c: 2, d: 3};
})(MyNameSpace || (exports.MyNameSpace = MyNameSpace = {}));
