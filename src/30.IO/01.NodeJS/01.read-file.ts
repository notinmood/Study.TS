/**
 * @file   : 01.read-file.ts
 * @time   : 14:11
 * @date   : 2025/2/20
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: Less is more.Simple is best!
 */

export default {
    name: "01.使用Node.js读取文件内容",
    description: "使用Node.js的fs模块读取文件内容，包括同步读取和异步读取两种方式",
};

import * as fs from "fs";

// 1. 同步读取文件内容（通过函数返回值的方式得到文件内容）
const data = fs.readFileSync("../00.res/data.txt", "utf8");
console.log("我是同步读取文件的结果：");
console.log(data);

console.log("");
console.log("──────────────────");

// 2. 异步读取文件内容（通过回调函数的方式得到文件内容）
const callback = (err: Error | null, data: string) => {
    if (err) {
        console.error(err);
    } else {
        console.log("我是异步读取文件的结果：");
        console.log(data);
    }
};

const path = "../00.res/data.txt";

fs.readFile(path, "utf-8", callback);
