"use strict";
/**
 * @file   : 1.通过索引的方式获取复杂类型中某个子键的数据类型.ts
 * @time   : 22:41
 * @date   : 2022/4/29
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNameSpace = void 0;
// +--------------------------------------------------------------------------
// |::说明·| 获取复杂类型的子类型，使用 [] 这种索引形式。
// +--------------------------------------------------------------------------
var MyNameSpace;
(function (MyNameSpace) {
    var someData = {
        obj: {
            one: 1
        },
        arr: [1, 2, 4],
        num: 1
    };
})(MyNameSpace || (exports.MyNameSpace = MyNameSpace = {}));
