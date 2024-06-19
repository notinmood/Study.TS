"use strict";
/**
 * @file   : 2.2.extends和泛型联合使用.ts
 * @time   : 18:28
 * @date   : 2022/4/26
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MY = void 0;
var MY;
(function (MY) {
    function createLabel(nameOrId) {
        throw "unimplemented";
    }
    var a = createLabel("typescript");
    //   let a: NameLabel
    var b = createLabel(2.8);
    //   let b: IdLabel
    var c = createLabel(Math.random() ? "hello" : 42);
    //   let c: NameLabel | IdLabel
})(MY || (exports.MY = MY = {}));
