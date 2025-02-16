/**
 * @file   : ss.js
 * @time   : 17:09
 * @date   : 2022/4/15
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "02.禁止格式化",
    description: "临时禁止 IDE 对某段代码的格式化处理。",
};

// +--------------------------------------------------------------------------
// |::说明·| 临时禁止 IDE 对某段代码的格式化处理。
// +--------------------------------------------------------------------------

// @formatter:off
/* eslint-disable-next-line */
let someAA =   123;
// @formatter:on

console.log(someAA);
