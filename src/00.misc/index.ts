/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2025-01-18 10:06:08
 * @LastEditors  : Shandong Xiedali
 * @LastEditTime : 2025-02-07 15:12:29
 * @FilePath     : index.ts
 * @Description  : (description here)
 * @Copyright (c) 2025 by WRJT Co., Ltd., All Rights Reserved.
 */
export default {};

console.log("Hello,World!");

function getType(something: unknown): string {
    return Object.prototype.toString.call(something).slice(8, -1);
}

console.log(getType(null)); // "Null"
console.log("qingdao".toString()); // "qingdao"
console.log(getType("qingdao")); // "String"
