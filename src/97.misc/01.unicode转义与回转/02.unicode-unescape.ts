/**
 * @file   : 02.unicode-.ts
 * @time   : 10:26
 * @date   : 2025/2/20
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: Less is more.Simple is best!
 */
export default {
    name: "02.unicode-将转义后的unicode字符转义回转",
    description: "将转义后的unicode字符转义回来",
};

//方法1：正则表达式替换
/**
 * 将转义后的unicode字符转义回来
 * 思路：
 * 1. 匹配到\u后面的4位16进制数，用parseInt转换成10进制数
 * 2. 调用String.fromCharCode方法，将10进制数转成对应的字符
 * 3. 重复1、2步骤，直到所有\u后面的4位16进制数都被替换完毕
 * 4. 返回替换后的字符串
 * @param data
 */
function unescapeUnicode1(data: string): string {
    return data.replace(/\\u([a-fA-F0-9]{4})/g, function (match, capture) {
        return String.fromCharCode(parseInt(capture, 16));
    });
}

console.log(unescapeUnicode1("\\u0024")); // $
console.log(unescapeUnicode1("\\u0024\\u00A2\\u00A3")); // $¢£

console.log(unescapeUnicode1("\\ud83d\\udd9c\\ud83c\\udf10"));

//方法2：charCodeAt方法
/**
 * 将转义后的unicode字符转义回来
 * 思路：
 * 1. 遍历字符串，遇到\u后面的4位16进制数，用charCodeAt方法获取其对应的字符码
 * 2. 调用String.fromCharCode方法，将字符码转成对应的字符
 * 3. 重复1、2步骤，直到所有\u后面的4位16进制数都被替换完毕
 * 4. 返回替换后的字符串
 * @param data
 */
function unescapeUnicode2(data: string): string {
    let result = "";
    let i = 0;
    while (i < data.length) {
        if (data[i] === "\\") {
            if (data[i + 1] === "u") {
                const code = data.slice(i + 2, i + 6);
                result += String.fromCharCode(parseInt(code, 16));
                i += 6;
            } else {
                result += data[i];
                i++;
            }
        } else {
            result += data[i];
            i++;
        }
    }
    return result;
}

console.log(unescapeUnicode2("\\u0024")); // $
console.log(unescapeUnicode2("\\u0024\\u00A2\\u00A3")); // $¢£

console.log("方法3：──────────────────");
//方法3：charCodeAt方法优化
function unescapeUnicode3(escapedUnicode: string) {
    let result = escapedUnicode;
    console.log(escapedUnicode);
    // result = JSON.stringify(result);
    // console.log(result);
    // result = JSON.parse(result);
    // console.log(result);
    // result = result.replace(/\\\\/g, "\\");
    // console.log("> " + result);

    // 使用 JSON.parse 转换
    result = JSON.parse('"' + result + '"');
    return result;
}

const escapedUnicode = "\\u4e16\\u754c"; // 转义后的 Unicode 字符
console.log(unescapeUnicode3(escapedUnicode)); // 输出: 世界

console.log("方法4：─");
const escapedUnicode2 = "\\u4e16\\u754c"; // 转义后的 Unicode 字符
const aa = JSON.parse('"' + escapedUnicode2 + '"');
console.log(aa); // 输出: 世界
