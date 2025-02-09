/**
 * @file   : 01.abc.ts
 * @time   : 16:43
 * @date   : 2025/1/17
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "01.lodash使用入门",
    description: "lodash是一个非常流行的JavaScript工具库，提供了很多实用的函数，可以帮助我们简化代码，提高开发效率。",
};

import _ from "lodash";

const arr: number[] = [1, 2, 3, 4, 5];

const result: number[][] = _.chunk(arr, 2);
console.log(result);
