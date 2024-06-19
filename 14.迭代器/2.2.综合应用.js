"use strict";
var _e;
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file   : 2.2.综合应用.ts
 * @time   : 15:55
 * @date   : 2022/5/5
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
exports.default = {};
var range = (_e = {
        from: 1,
        to: 5,
        current: 1
    },
    _e[Symbol.iterator] = function () {
        this.current = this.from;
        return this;
    },
    _e.next = function () {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        }
        else {
            return { done: true };
        }
    },
    _e);
/**
 * 需要在 tsconfig.json 内设置 "downlevelIteration":true,
 * 当然直接 设置 target=es6 的时候，也能正常执行。
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
for (var _i = 0, range_1 = range; _i < range_1.length; _i++) {
    var num = range_1[_i];
    console.log(num); // 1, 然后是 2, 3, 4, 5
}
