/**
 * @file   : 05.Number()-newNumber().ts
 * @time   : 14:56
 * @date   : 2025/2/23
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: Less is more.Simple is best!
 */
export default {
    name: "09.02.Number() 与new Number() 的区别",
    description:
        "使用 Number(123) 可以将值转换为原始数字类型，适合大多数情况下的数值操作。" +
        "使用 new Number(123) 可以创建一个 Number 对象，具有对象的特性，适用于需要更灵活操作的场景。" +
        "但在大多数情况下，推荐使用原始数字类型以避免不必要的复杂性。",
};

//1. Number() 方法与 new Number() 类型构造函数创建数字和数字对象
// 1.1 Number() 方法
const num18 = Number(123); // 数字
const num19 = Number("123.456"); // 字符串
const num20 = Number("0b1111"); // 二进制
const num21 = Number("0o777"); // 八进制
const num22 = Number("0x123"); // 十六进制

console.log(num18, num19, num20, num21, num22); // 123 123.456 15 511 291

// 1.2 new Number() 类型构造函数
const num33 = new Number(123);
const num34 = new Number("123.456");
const num35 = new Number("0b1111");
const num36 = new Number("0o777");
const num37 = new Number("0x123");

console.log(num33, num34, num35, num36, num37); // [Number: 123] [Number: 123.456] [Number: 15] [Number: 511] [Number: 291]

// 2. 原始数字类型与 Number 对象之间的区别
// 2.1 原始数字类型是number和new Number（）是object
console.log(typeof num18, typeof num33); // number object

// 2.2 原始数字类型和 Number 对象之间的相互转换（使用valueOf()方法获取原始数字类型的值）
const num41 = num18 + num33.valueOf(); // 246
console.log(num41); // 246
