/**
 * @file   : 01.mapping.abc.ts
 * @time   : 16:47
 * @date   : 2025/2/14
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "01.mapping.abc",
    description: "映射类型基础",
};

type myFixedString = "a" | "b" | "c";
// noinspection all
type xx = { [K in myFixedString]: string }; //{a: string, b: string, c: string}

import { Student } from "../../00.res/Student";
// noinspection all
type yy = { [K in keyof Student]: string }; //{study: string, talk: string, eat: string, name: string, introduceSelf: string}
