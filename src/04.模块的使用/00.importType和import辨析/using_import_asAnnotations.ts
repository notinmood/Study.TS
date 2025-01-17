/**
 * @file   : using_import_onlyAnnotations.ts
 * @time   : 09:01
 * @date   : 2025/1/17
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "using_import_onlyAnnotations",
    description: "使用import导入类型，但仅仅把导入的类型作为注解使用",
};

// 1.导入类型
import { Foo } from "./types";

// 2.使用类型注解
const foo: Foo = { bar: "baz" }; // 正常使用 Foo 接口对象
console.log(foo.bar); // "baz"
