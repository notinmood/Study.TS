/**
 * @file   : 01.abc.ts
 * @time   : 16:43
 * @date   : 2025/1/17
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "02.lodash-es使用入门",
    description: "lodash-es是lodash的ES版本。",
};

import _ from "lodash-es";

const arr: number[] = [1, 2, 3, 4, 5];

const result: number[][] = _.chunk(arr, 2);
console.log(result);
