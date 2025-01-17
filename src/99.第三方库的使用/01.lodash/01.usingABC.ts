/**
 * @file   : 01.abc.ts
 * @time   : 16:43
 * @date   : 2025/1/17
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

import _ from "lodash";

const arr: number[] = [1, 2, 3, 4, 5];

const result: number[][] = _.chunk(arr, 2);
console.log(result);
