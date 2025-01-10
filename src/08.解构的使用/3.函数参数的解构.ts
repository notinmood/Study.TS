/**
 * @file   : 3.函数参数的解构.ts
 * @time   : 11:03
 * @date   : 2022/4/19
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {};

//定义一个数据类型 C，它是一个对象，里面的 a 为 string 类型，里面的 b 是一个可选值，为 number 类型
type C = { a: string; b?: number };

//这时候 a 就是 string 类型，b 就是 number 类型
// eslint-disable-next-line no-inner-declarations
function myFunc({ a, b }: C): void {
    console.log(a);
    console.log(b);
}

const p: C = { a: "qingdao", b: 2009 };
myFunc(p);
