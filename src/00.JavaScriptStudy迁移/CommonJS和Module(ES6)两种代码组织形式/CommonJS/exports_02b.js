/**
 * @file   : exports_01.cjs.js
 * @time   : 10:30
 * @date   : 2022/4/1
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

function bar(){
    console.log("something!");
}

// 缺省情况下，exports是对module.exports的一个引用
// 可以通过`exports.属性名=值`来添加属性。比如
// exports.bar=bar;

// 但是，如果直接对exports赋值，则会改变对module.exports的引用，导致CommonJS的暴露机制失效。
exports = bar; // 这样exports就不再执行原来的module.exports了。