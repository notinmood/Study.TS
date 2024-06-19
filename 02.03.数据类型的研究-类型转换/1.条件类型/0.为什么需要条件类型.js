"use strict";
/**
 * @file   : 0.条件类型入门.ts
 * @time   : 8:57
 * @date   : 2022/4/27
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNameSpace = void 0;
var MyNameSpace;
(function (MyNameSpace) {
    // 为什么需要条件类型？
    // 在TypeScript使用过程中，我们一般会直接指定具体类型
    // 比如：
    var str = 'test!';
    // Type is 'string | number'
    var x = f(Math.random() < 0.5);
    // Type is 'number'
    var y = f(false);
    // Type is 'string'
    var z = f(true);
    function foo(x) {
        // 因为 ”x“ 未知，因此判断条件不足，不能确定条件分支，推迟条件判断直到 ”x“ 明确，
        // 推迟过程中，”a“ 的类型为分支条件类型组成的联合类型，
        // string | number
        var a = f(x);
        // 这么做是完全可以的
        var b = a;
    }
})(MyNameSpace || (exports.MyNameSpace = MyNameSpace = {}));
