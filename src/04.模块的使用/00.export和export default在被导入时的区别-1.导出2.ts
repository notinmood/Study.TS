/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2024/5/27 07:54:52
 * @FilePath     : 00.export和export default在被导入时的区别.ts
 * @Description  :
 * Copyright (c) 2024 by Hiland & RainyTop, All Rights Reserved.
 */

export const a = 1;

export function b() {
    console.log("b");
}

export class C {
    constructor() {
        console.log("C");
    }
}

export default {
    xx: 1,
    yy: 2,
    zz: "qingdao",
    hello() {
        console.log("hello");
    },
};
