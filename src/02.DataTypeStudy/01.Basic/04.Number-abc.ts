/**
 * @file   : 04.ts
 * @time   : 14:40
 * @date   : 2025/2/23
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: Less is more.Simple is best!
 */
export default {
    name: "04.Number类型的基本使用",
    description: "Number类型是JavaScript中用于表示数值的基本类型，它提供了一系列的构造函数和方法用于操作数字。",
};

// 1. 数字类型

const num1: number = 10;
const num2: number = 20.5;
const num3: number = 0b1010; // 二进制
const num4: number = 0o24; // 八进制
const num5: number = 0x14; // 十六进制

console.log(num1, num2, num3, num4, num5); // 10 20.5 10 20 20

// 2. 进制转换

const num6: number = 10;
const num7: string = num6.toString(2); // 二进制
const num8: string = num6.toString(8); // 八进制
const num9: string = num6.toString(16); // 十六进制

console.log(num7, num8, num9); // "1010" "12" "a"

// 3. 类型转换（parseInt）

const num23 = Number.parseInt("123"); // 123
const num24 = Number.parseInt("123.456"); // 123
const num25 = Number.parseInt("0b1111"); // 0
const num26 = Number.parseInt("0o777"); // 0
const num27 = Number.parseInt("0x123"); // 291

console.log(num23, num24, num25, num26, num27); // 123 123 0 0 291

// 4. 类型转换（parseFloat）

const num28 = Number.parseFloat("123"); // 123
const num29 = Number.parseFloat("123.456"); // 123.456
const num30 = Number.parseFloat("0b1111"); // 0
const num31 = Number.parseFloat("0o777"); // 0
const num32 = Number.parseFloat("0x123"); // 0

console.log(num28, num29, num30, num31, num32); // 123 123.456 0 0 0

// 5. 精度控制

const num10: number = 9123.45612;
const num11: string = num10.toFixed(2); // 保留两位小数
const num12: string = num10.toExponential(2); // 科学计数法，保留两位小数
const num13: string = num10.toPrecision(4); // 固定精度，总共保留四位数

console.log(num11, num12, num13); // "9123.46" "9.12e+3" "9123"

// 6. 本地化数字显示

const num14: number = 1234.56;
const num15: string = num14.toLocaleString(); // 根据系统语言环境显示数字
const num16: string = num14.toLocaleString("en-US"); // 显示数字为英文格式
const num17: string = num14.toLocaleString("zh-CN"); // 显示数字为中文格式

console.log(num15, num16, num17); // 1,234.56 1,234.56 1,234.56

// 7. 其他方法
const num18: number = Number.MIN_VALUE;
const num19: number = Number.MAX_VALUE;
const num20: number = Number.NaN;
const num21: number = Number.POSITIVE_INFINITY;
const num22: number = Number.NEGATIVE_INFINITY;

console.log(num18, num19, num20, num21, num22); // 5e-324 1.7976931348623157e+308 NaN Infinity -Infinity
