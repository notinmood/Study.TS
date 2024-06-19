"use strict";
/**
 * @file   : 2.infer和内置类型.ts
 * @time   : 7:12
 * @date   : 2022/5/6
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNameSpace = void 0;
/**
 * 当 infer 用于构造函数类型中:
 * 可用于参数位置 new (...args: infer P) => any;
 * 和返回值位置 new (...args: any[]) => infer P;
 */
var MyNameSpace;
(function (MyNameSpace) {
    var TestClass = /** @class */ (function () {
        function TestClass(name, age) {
            this.name = name;
            this.age = age;
        }
        return TestClass;
    }());
})(MyNameSpace || (exports.MyNameSpace = MyNameSpace = {}));
