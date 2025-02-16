/**
 * @file   : 禁止代码检查.js
 * @time   : 17:11
 * @date   : 2022/4/15
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
export default {
    name: "01.禁止对代码进行检查",
    description:
        "临时禁止 IDE 对某段代码的检查，比如在某段代码中使用了某些不规范的写法，而不想让 IDE 报错，可以用此方法。",
};

// +--------------------------------------------------------------------------
// |::说明·| 临时禁止代码规范检查
// +--------------------------------------------------------------------------

// noinspection all
console.log(xx(new Number(123)));
