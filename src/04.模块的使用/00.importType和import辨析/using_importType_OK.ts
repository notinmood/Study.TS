/**
 * @file   : using_import_onlyAnnotations.ts
 * @time   : 09:01
 * @date   : 2025/1/17
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "using_import_Type",
    description: "使用importType导入类型",
};

// 1.导入类型（以下两种方式都可以，推荐使用第一种）
import type { Foo } from "./types";
// import { type Foo } from "./types";

// 2.使用类型（使用类型注解）
const foo: Foo = { bar: "baz" }; // 正常使用 Foo 接口对象
console.log(foo.bar); // "baz"
