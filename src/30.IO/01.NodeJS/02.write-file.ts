/**
 * @file   : 02.write-file.ts
 * @time   : 15:02
 * @date   : 2025/2/20
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: Less is more.Simple is best!
 */

export default {
    name: "02.使用Node.js写入文件",
    description: "Node.js提供了fs模块，可以用来写入文件。",
};

/**
 * Node.js提供了fs模块，可以用来写入文件。
 * 写入文件有两种方式：同步写入和异步写入。
 * 同步写入：fs.writeFileSync(path, data[, options])
 * 异步写入：fs.writeFile(path, data[, options], callback)
 * 其中，path为文件路径，data为写入的数据，options为可选参数，callback为写入完成后的回调函数。
 *注意事项：
 * 1. 写入的文件路径必须存在，否则会报错。
 * 2. 写入文件时，如果文件不存在，则会自动创建文件。
 * 3. 写入文件时，如果文件已存在，则会覆盖原文件内容。
 */

import * as fs from "fs";
// 1. 同步写入文件
fs.writeFileSync("../00.res/hello-sync.txt", "同步写入文件=> Hello Node.js!");
console.log("同步写入文件=> 文件写入成功！");

// 2. 异步写入文件
fs.writeFile("../00.res/hello-async.txt", "异步写入文件=> Hello Node.js!", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("异步写入文件=> 文件写入成功！");
    }
});
