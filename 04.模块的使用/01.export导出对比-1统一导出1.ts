/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2024/5/27 07:54:52
 * @FilePath     : 00.export和export default在被导入时的区别.ts
 * @Description  :
 * Copyright (c) 2024 by Hiland & RainyTop, All Rights Reserved.
 */

const a = 1;

function b() {
    console.log("b");
}

class C {
    constructor() {
        console.log("C");
    }
}

export { a, b, C };
