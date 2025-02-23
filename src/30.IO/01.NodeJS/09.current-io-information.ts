/**
 * @file   : 09.current-io-information.ts
 * @time   : 16:27
 * @date   : 2025/2/23
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: Less is more.Simple is best!
 */
import { basename } from "path";

export default {
    name: "09.current-io-information",
    description: "获取当前的代码所在文件的路径信息",
};

console.log(__filename); // 输出当前文件的绝对路径
console.log(__dirname); // 输出当前文件的所在目录

console.log(basename(__filename)); // 输出当前文件名
