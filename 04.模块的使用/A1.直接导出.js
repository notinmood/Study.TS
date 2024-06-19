"use strict";
/**
 * @file   : A1.直接导出.ts
 * @time   : 9:03
 * @date   : 2022/4/22
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.doSomething = exports.someVar = void 0;
exports.someVar = 123;
function doSomething(input) {
    return input + "_" + input;
}
exports.doSomething = doSomething;
