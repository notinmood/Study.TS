/**
 * @file   : using_import_onlyAnnotations.ts
 * @time   : 09:01
 * @date   : 2025/1/17
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "using_import_asValue",
    description: "使用import导入类型，并把导入的类型作为值来使用",
};

// 1.导入类型
import { MyEnum } from "./types";

// 2.作为值来使用类型
const myEnum: MyEnum = MyEnum.DEFAULT; // 正常使用 MyEnum 枚举值
console.log(myEnum); // 0
