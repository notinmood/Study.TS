"use strict";
/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2024/5/27 07:54:52
 * @FilePath     : 00.export和export default在被导入时的区别.ts
 * @Description  :
 * Copyright (c) 2024 by Hiland & RainyTop, All Rights Reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var all = require("./00.export\u548Cexport default\u5728\u88AB\u5BFC\u5165\u65F6\u7684\u533A\u522B-1.\u5BFC\u51FA1");
var bar = require("./00.export\u548Cexport default\u5728\u88AB\u5BFC\u5165\u65F6\u7684\u533A\u522B-1.\u5BFC\u51FA2");
console.log(all); //{ a:1, b:[Function: b], C:[Function: C], default:[Function: d] }
// 从上面可以看出，导入时，默认导出和命名导出都会被导入到当前模块的命名空间中，而：
// 1. 命名导出会被赋值给有具体名称的变量，
// 2. 默认导出会被赋值给default变量。
console.log(bar);
//{
//   a:1,
//   b:[Function: b],
//   C:[Function: C],
//   default: { xx:1, yy:2, zz:'qingdao', hello:[Function: hello] }
// }
// 这里的default变量的值是对象，而不是函数。
