"use strict";
/**
 * @file   : B9.默认导入2.ts
 * @time   : 9:55
 * @date   : 2022/4/22
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
// +--------------------------------------------------------------------------
// |::说明·| 因为默认导出的时候，某个被导出信息可能没有名称（反正每个模块只能有一个默认导出，所以可以没有名称），
// |::一一·|  因此导入的时候可以统一使用任何名称命名导入信息。
// +--------------------------------------------------------------------------
var A9_____2_1 = require("./A9.\u9ED8\u8BA4\u5BFC\u51FA2");
var result = (0, A9_____2_1.default)(3);
console.log(result);
