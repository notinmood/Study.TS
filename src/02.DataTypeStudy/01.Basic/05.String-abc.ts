/**
 * @file   : 09.03. String()-newString().ts
 * @time   : 15:12
 * @date   : 2025/2/23
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: Less is more.Simple is best!
 */

export default {
    name: "05.字符串基本用法",
    description: "字符串的基本用法",
};

// 1. 创建字符串
// 1.1 字符串字面量创建字符串
const str1 = "hello world";
console.log(str1); // hello world

// 1.2 new String()创建字符串
const str2 = new String("hello world");
console.log(str2); // [String: 'hello world']

// 2. 字符串的基本操作
// 字符串的长度
console.log(str1.length); // 11
console.log(str2.length); // 11

// 字符串的索引操作
console.log(str1[0]); // h
console.log(str2[0]); // h

// 字符串的拼接操作
const str3 = str1 + " " + str2;
console.log(str3); // hello world hello world

// 3. 字符串的常用方法
// 字符串的toUpperCase()方法
console.log(str1.toUpperCase()); // HELLO WORLD
console.log(str2.toUpperCase()); // HELLO WORLD

// 字符串的toLowerCase()方法
console.log(str1.toLowerCase()); // hello world
console.log(str2.toLowerCase()); // hello world

// 字符串的trim()方法
console.log(str1.trim()); // hello world
console.log(str2.trim()); // hello world

// 字符串的charAt()方法
console.log(str1.charAt(0)); // h
console.log(str2.charAt(0)); // h

// 字符串的charCodeAt()方法
console.log(str1.charCodeAt(0)); // 104
console.log(str2.charCodeAt(0)); // 104

// 字符串的includes()方法
console.log(str1.includes("world")); // true
console.log(str2.includes("world")); // true

// 字符串的endsWith()方法
console.log(str1.endsWith("world")); // true
console.log(str2.endsWith("world")); // true

// 字符串的startsWith()方法
console.log(str1.startsWith("hello")); // true
console.log(str2.startsWith("hello")); // true

// // 字符串的localeCompare()方法
// console.log(str1.localeCompare(str2)); // 0
// console.log(str1.localeCompare(str2, "zh-CN")); // 0
// console.log(str1.localeCompare(str2, "en-US")); // 0
// console.log(str1.localeCompare(str2, "ja-JP")); // 0

// 字符串的match()方法
console.log(str1.match(/l/)); // ["l"]
console.log(str2.match(/l/)); // ["l"]

// 字符串的replace()方法
console.log(str1.replace("l", "L")); // heLLo world
console.log(str2.replace("l", "L")); // heLLo world

// 字符串的search()方法
console.log(str1.search("l")); // 2
console.log(str2.search("l")); // 2

// 字符串的split()方法
console.log(str1.split(" ")); // ["hello", "world"]
console.log(str2.split(" ")); // ["hello", "world"]

// 字符串的substring()方法
console.log(str1.substring(0, 5)); // hello
console.log(str2.substring(0, 5)); // hello

// 字符串的toLocaleUpperCase()方法
console.log(str1.toLocaleUpperCase()); // HELLO WORLD
console.log(str2.toLocaleUpperCase()); // HELLO WORLD

// 字符串的toLocaleLowerCase()方法
console.log(str1.toLocaleLowerCase()); // hello world
console.log(str2.toLocaleLowerCase()); // hello world
