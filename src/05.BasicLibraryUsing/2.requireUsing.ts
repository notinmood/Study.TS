/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2022-04-11 20:37:00
 * @LastEditors  : Shandong Xiedali
 * @LastEditTime : 2022-04-11 20:38:35
 * @FilePath     : using.ts
 * @Description  :
 * Copyright (c) 2022 by Hiland & RainyTop, All Rights Reserved.
 */

// 虽然是Commonjs项目，但已经不推荐使用Require加载Commonjs模块了，但还是可以使用，只是给出警告。
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { StringHelper } = require("basiclibrary.ts/lib/data/stringHelper");

//而是使用ES6加载模块的方式。
// import { StringHelper } from "basiclibrary.ts/lib/data/stringHelper";

const myString = "Hello, world!";
console.log(StringHelper.reverse(myString));
