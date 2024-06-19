"use strict";
/**
 * @file   : B2.全部导入.ts
 * @time   : 9:20
 * @date   : 2022/4/22
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
var helper = require("./A1.\u76F4\u63A5\u5BFC\u51FA");
// +--------------------------------------------------------------------------
// |::说明·| 如果采用全部导入话，那么被导入模块里面所有的导出信息，都作为本地接收变量（本例中的helper）的属性而使用
// +--------------------------------------------------------------------------
console.log(helper.someVar);
console.log(helper.doSomething("love"));
