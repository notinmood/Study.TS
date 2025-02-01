/**
 * @file   : exports_01.cjs.js
 * @time   : 10:30
 * @date   : 2022/4/1
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

function foo(){
    console.log("something!");
}

// 缺省情况下，exports是对module.exports的一个引用
// 可以通过`exports.属性名=值`来添加属性。
exports.foo=foo;