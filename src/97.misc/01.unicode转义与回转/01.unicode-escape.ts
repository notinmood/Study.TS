/**
 * @file   : 01.unicode-a.ts
 * @time   : 09:53
 * @date   : 2025/2/20
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: Less is more.Simple is best!
 */

export default {
    name: "01.unicode转义",
    description: "Unicode转义方式",
};

const str = "Hello, 世界!";
const escapedStr = JSON.stringify(str); // "Hello, \\u4e16\\u754c!"

console.log(str); // "Hello, 世界!"
console.log(escapedStr); // 本身为"Hello, \u4e16\u754c!"，但console.log()会自动将其转义为"Hello, 世界!"

const myStr = "👋🌍";
const escapedMyStr = JSON.stringify(myStr); // "\ud83d\udd9c\ud83c\udf10"
console.log(myStr); // 输出: "👋🌍"
console.log(escapedMyStr); // 输出: "\ud83d\udd9c\ud83c\udf10"

console.log("Hello, \u4e16\u754c!");
