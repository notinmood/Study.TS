"use strict";
/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2022-04-10 20:33:48
 * @LastEditors  : Shandong Xiedali
 * @LastEditTime : 2022-04-11 20:59:01
 * @FilePath     : Human.ts
 * @Description  :
 * Copyright (c) 2022 by Hiland & RainyTop, All Rights Reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Human = void 0;
var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.talk = function () {
        console.log("\u6211\u4F1A\u8BF4\u8BDD\uFF01");
    };
    Human.prototype.eat = function () {
        console.log("\u6211\u80FD\u5403\u4E1C\u897F\uFF01");
    };
    Human.prototype.introduceSelf = function () {
        console.log("\u6211\u662F".concat(this.name, ",\u5F88\u9AD8\u5174\u8BA4\u8BC6\u4F60\uFF01"));
    };
    return Human;
}());
exports.Human = Human;
