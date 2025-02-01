/**
 * @file   : require_01.js
 * @time   : 10:33
 * @date   : 2022/4/1
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// 使用require()函数引入模块
// 引入模块的两种方式：
// 1. require(module)：
// 2. module.require(module)：
// 其实两者是一样的。只是在IDE中module.require()的智能提示会有问题。
// 推荐使用require()函数导入模块，因为它更加简洁。

// 1.导入本地模块，两者都可以
const a = require("./exports_01a.js");
const b = module.require("./exports_01b.js");

console.log(a);
a.bar();

console.log(b);
b.foo();

// 2.导入node.js内置模块，两者都可以
const http = require("http");
const url = module.require("url");

console.log(http);
console.log(url);

// 3. 导入第三方模块，两者都可以
const basicLibrary = require("basiclibrary.ts/lib/index.js");
console.log(basicLibrary);

const bl = module.require("basiclibrary.ts/lib/index.js");
console.log(bl);


