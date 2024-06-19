/**
 * @file   : 2.泛型函数.ts
 * @time   : 20:29
 * @date   : 2022/4/20
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
// +--------------------------------------------------------------------------
// |::说明·| 注意以下4种方式定义函数的时候，参数的泛型和函数返回值的泛型表达方式
// +--------------------------------------------------------------------------
function returnArgA(arg) {
    return arg;
}
var returnArgB = function (arg) {
    return arg;
};
var returnArgC = function (arg) {
    return arg;
};
var returnArgD = function (arg) {
    return arg;
};
var _a = returnArgA("qingdao");
var _b = returnArgB(123);
var _c = returnArgC(true);
var _d = returnArgD("123");
console.log(_a);
console.log(_b);
console.log(_c);
console.log(_d);
//以下纯粹演示 number类型在输出到时候显示为 “黄色”字体；
// 字符串显示为 白色字体
console.log('******* number类型显示为黄色；字符串类型显示为白色。*******');
console.log(_b);
console.log(_d);
//──作为对比，以下是非泛型普通的函数──────────────────
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function doSomethingA(arg) {
    return arg;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var doSomethingB = function (arg) {
    return arg;
};
