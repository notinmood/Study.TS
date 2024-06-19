"use strict";
/**
 * @file   : 1.自定义迭代器.ts
 * @time   : 10:40
 * @date   : 2022/4/26
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
var _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.obj = void 0;
exports.obj = (_e = {
        data: ['hello', 'world']
    },
    _e[Symbol.iterator] = function () {
        var self = this;
        var index = 0;
        return {
            next: function () {
                if (index < self.data.length) {
                    return {
                        value: self.data[index++],
                        done: false
                    };
                }
                else {
                    return { value: undefined, done: true };
                }
            }
        };
    },
    _e);
// TODO:xiedali@2022/4/26 奇怪，为什么 next() 没有向前移动指针？
console.log(exports.obj[Symbol.iterator]().next()); //{ value:'hello', done:false}
console.log(exports.obj[Symbol.iterator]().next()); //{ value:'hello', done:false}
