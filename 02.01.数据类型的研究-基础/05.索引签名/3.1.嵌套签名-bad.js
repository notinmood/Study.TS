"use strict";
/**
 * @file   : 3.1.嵌套签名-bad.ts
 * @time   : 6:35
 * @date   : 2022/5/1
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNameSpace = void 0;
var MyNameSpace;
(function (MyNameSpace) {
    var example = {
        color: 'red',
        '.subclass': {
            color: 'blue'
        }
    };
    var failsSilently = {
        colour: 'red', // 'colour' 不会被捕捉到错误
    };
})(MyNameSpace || (exports.MyNameSpace = MyNameSpace = {}));
