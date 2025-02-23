/**
 * @file   : 09.03. String()-newString().ts
 * @time   : 15:12
 * @date   : 2025/2/23
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: Less is more.Simple is best!
 */

export default {
    name: "09.03.String()-newString()",
    description: "String()和字面量方式（直接使用“”的方式）一样都是创建字符串本身, new String()创建字符串对象",
};

// 1. 字符串字面量创建字符串
const str1 = "hello world";
console.log(str1); // hello world
console.log(typeof str1); // string

// 2. 字符串构造函数创建字符串
const str2 = String("hello world");
console.log(str2); // hello world
console.log(typeof str2); // string

// 3. new String()创建字符串
const str3 = new String("hello world");
console.log(str3); // [String: 'hello world']
console.log(typeof str3); // object

// xx. 这3种方式创建的字符串使用的时候基本上没有区别。
const len1 = str1.length;
console.log(len1); // 11
const len2 = str2.length;
console.log(len2); // 11
const len3 = str3.length;
console.log(len3); // 11
