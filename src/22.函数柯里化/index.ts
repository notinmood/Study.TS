/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2025/1/30 07:59:34
 * @FilePath     : index.ts
 * @Description  :
 * Copyright (c) 2025 by Hiland & RainyTop, All Rights Reserved.
 */

import { curry } from "./curry";

function add(a: number, b: number, c: number): number {
    return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
console.log(curriedAdd(1, 2, 3)); // 6
