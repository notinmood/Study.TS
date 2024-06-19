"use strict";
/**
 * @file   : 3.泛型约束2.ts
 * @time   : 19:52
 * @date   : 2022/4/28
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
// +--------------------------------------------------------------------------
// |::说明·| 这个例子有点绕：用约束后的泛型定义新的类型 type
// +--------------------------------------------------------------------------
exports.default = {};
var Message = /** @class */ (function () {
    function Message() {
        this.message = "nbc";
    }
    return Message;
}());
// type MessageOf2<T extends { message: unknown }> = T["message"];
var myName = "qingdao";
console.log(myName); //qingdao
