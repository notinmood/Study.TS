/**
 * @file   : 2.对象的解构.ts
 * @time   : 10:53
 * @date   : 2022/4/19
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    title: "对象的解构",
};

const o = {
    a: "foo",
    b: 12,
    c: "bar",
};

const { a, b } = o; //从o中解构出a,b
console.log(a); // "foo"
console.log(b); // 12

// 解构时可以用别名
const { a: aa, ...rest2 } = o;
console.log(aa); // "foo"
console.log(rest2); // { b: 12, c: "bar" }
