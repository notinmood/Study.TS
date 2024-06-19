"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file   : 3.泛型约束.ts
 * @time   : 19:30
 * @date   : 2022/4/28
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
exports.default = {};
var Message = /** @class */ (function () {
    function Message() {
        this.message = "nbc";
    }
    return Message;
}());
function getMessage(arg) {
    return arg.message;
}
console.log(getMessage(new Message()));
console.log(getMessage({ message: "qingdao" }));
//以下代码，无法编译和运行。因为 {...} 内没有满足 IMessage 的 message 属性
//console.log(getMessage({city: "beijing"}));
