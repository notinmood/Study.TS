/**
 * @file   : dir-or-file-exist.ts
 * @time   : 15:30
 * @date   : 2025/2/20
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: Less is more.Simple is best!
 */

import * as fs from "fs";

// 1. 同步判断某个路径是否存在
function pathExistSync1(path: string): boolean {
    try {
        return fs.statSync(path).isFile() || fs.statSync(path).isDirectory();
    } catch (e) {
        return false;
    }
}

function pathExistSync2(path: string): boolean {
    try {
        fs.accessSync(path, fs.constants.F_OK);
        return true;
    } catch (e) {
        return false;
    }
}

console.log(pathExistSync1("../00.res/data.txt")); // true
console.log(pathExistSync1("../00.res/data-x.txt")); // false
console.log(pathExistSync1("../00.res/")); // true
console.log(pathExistSync1("../00.res/data-x/")); // false

console.log(pathExistSync2("../00.res/data.txt")); // true
console.log(pathExistSync2("../00.res/data-x.txt")); // false
console.log(pathExistSync2("../00.res/")); // true
console.log(pathExistSync2("../00.res/data-x/")); // false

// 2. 异步判断某个路径是否存在
function pathExistAsync1(path: string, callback: (exist: boolean, err: NodeJS.ErrnoException | null) => void): void {
    fs.access(path, fs.constants.F_OK, (err) => {
        if (err) {
            callback(false, err);
        } else {
            callback(true, null);
        }
    });
}

pathExistAsync1("../00.res/data.txt", (exist, err) => {
    if (err) {
        console.log("❌目录或者文件不存在");
    } else {
        console.log("✅目录或者文件存在");
    }
});

pathExistAsync1("../00.res/data-x.txt", (exist, err) => {
    if (err) {
        console.log("❌目录或者文件不存在");
    } else {
        console.log("✅目录或者文件存在");
    }
});

pathExistAsync1("../00.res/", (exist, err) => {
    if (err) {
        console.log("❌目录或者文件不存在");
    } else {
        console.log("✅目录或者文件存在");
    }
});

pathExistAsync1("../00.res/data-x/", (exist, err) => {
    if (err) {
        console.log("❌目录或者文件不存在");
    } else {
        console.log("✅目录或者文件存在");
    }
});

// fs.access("../00.res/test/level1/level2", (err) => {
//     if (err) {
//         console.log("❌目录不存在");
//     } else {
//         console.log("✅目录存在");
//     }
// });
//
// fs.access("../00.res/test-x", fs.constants.F_OK, (err) => {
//     if (err) {
//         console.log("❌目录不存在");
//     } else {
//         console.log("✅目录存在");
//     }
// });
