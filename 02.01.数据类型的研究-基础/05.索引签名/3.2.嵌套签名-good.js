"use strict";
/**
 * @file   : 3.2.嵌套签名-good.ts
 * @time   : 6:38
 * @date   : 2022/5/1
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNameSpace = void 0;
var MyNameSpace;
(function (MyNameSpace) {
    var successful = {
        color: 'red',
        nest: {
            '.subclass': {
                color: 'blue'
            }
        }
    };
    var fails = {
        color: 'red',
        /**
         * 以下代码会报错
         * TS Error: 未知属性 'colour'
         */
        // colour: 'red',
    };
})(MyNameSpace || (exports.MyNameSpace = MyNameSpace = {}));
