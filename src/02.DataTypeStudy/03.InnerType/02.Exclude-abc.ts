/**
 * @file   : 2.1.Exclude的使用.ts
 * @time   : 11:11
 * @date   : 2022/5/4
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    title: "2.Exclude的使用",
    description: "Exclude的使用",
};

type MyExcludedType = Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">; // 'b' | 'd'

const myValue: MyExcludedType = "b"; // 这里只能赋值"b"或"d"，不能赋值"a"或"c"或"f"或其他
console.log(myValue); // "b"

// //以下代码会报错，因为"aa"不在类型 "b"|"d"中
// const otherValue: MyExcludedType = "aa";
// console.log(otherValue);
