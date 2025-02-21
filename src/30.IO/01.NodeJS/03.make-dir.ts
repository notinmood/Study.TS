/**
 * @file   : 03.make-dir.ts
 * @time   : 15:15
 * @date   : 2025/2/20
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: Less is more.Simple is best!
 */

import * as fs from "fs";

// 创建目录
fs.mkdirSync("../00.res/test", { recursive: true });

// 创建多级目录
fs.mkdirSync("../00.res/test/level1/level2", { recursive: true });
