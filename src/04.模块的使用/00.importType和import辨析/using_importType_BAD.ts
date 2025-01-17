/**
 * @file   : using_import_onlyAnnotations.ts
 * @time   : 09:01
 * @date   : 2025/1/17
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "using_importType_BAD",
    description: "使用import type导入类型，但把导入的类型作为值来使用",
};

// 1.导入类型
// eslint-disable-next-line
import type { MyEnum } from "./types";

// 2.作为值来使用类型
/**
 * 以下代码将会报错，因为需要使用 MyEnum 作为是一个值，而不是一个类型。
 * IDE给出的提示信息为：
 * TS1361: MyEnum cannot be used as a value because it was imported using import type
 */
// const myEnum: MyEnum = MyEnum.DEFAULT; // 正常使用 MyEnum 枚举值
// console.log(myEnum); // 0
