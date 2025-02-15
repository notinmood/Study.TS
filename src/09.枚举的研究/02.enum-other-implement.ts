/**
 * @file   : 02.enum-other-implement.ts
 * @time   : 15:39
 * @date   : 2025/2/15
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "02.枚举的模拟实现方式",
    description: "在不支持枚举的语言中，我们可以模拟枚举的实现方式，比如使用类型内的常量（或静态变量）来代替枚举值。",
};

class MyEnum {
    static readonly RED = "RED";
    static readonly GREEN = "GREEN";
    static readonly BLUE = "BLUE";
}

console.log(MyEnum.RED); // "RED"
console.log(MyEnum.GREEN); // "GREEN"
console.log(MyEnum.BLUE); // "BLUE"
