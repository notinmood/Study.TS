"use strict";
/**
 * @file   : 2.1.综合应用.ts
 * @time   : 15:50
 * @date   : 2022/5/5
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNameSpace = void 0;
var MyNameSpace;
(function (MyNameSpace) {
    var range = {
        from: 1,
        to: 5
    };
    // 1. for..of 调用首先会调用这个：
    range[Symbol.iterator] = function () {
        // ……它返回迭代器对象（iterator object）：
        // 2. 接下来，for..of 仅与下面的迭代器对象一起工作，要求它提供下一个值
        return {
            current: this.from,
            last: this.to,
            // 3. next() 在 for..of 的每一轮循环迭代中被调用
            next: function () {
                // 4. 它将会返回 {done:.., value :...} 格式的对象
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                }
                else {
                    return { done: true };
                }
            }
        };
    };
    // 现在它可以运行了！
    // @ts-ignore
    for (var _i = 0, range_1 = range; _i < range_1.length; _i++) {
        var num = range_1[_i];
        console.log(num); // 1, 然后是 2, 3, 4, 5
    }
})(MyNameSpace || (exports.MyNameSpace = MyNameSpace = {}));
