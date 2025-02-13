/**
 * @file   : 6.keyof的使用.ts
 * @time   : 9:54
 * @date   : 2022/4/27
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "1. 关键字keyof的使用",
    description: "keyof是获取类型的成员名称，然后用这些名称字符串构成新的类型",
};

/**
 * keyof 是获取类型成员名称的操作符，keyof操作符‌用于获取一个类型的所有键（属性名）构成的联合类型。
 * 它主要用于在类型系统中引用对象类型的键，确保类型安全，避免运行时错误。
 *
 * 假设 T 是一个类型，那么 keyof T 产生的类型是 T 的所有成员名称字符串字面量类型构成的联合类型。
 * 例如下面代码中 Ikea = 'name' | 'count'。IKea表示字符串字面量构成的类型 'name' 和 'count' 的联合类型
 * 特别说明:T是数据类型，并非数据本身。
 *
 * keyof操作符是在TypeScript 2.1版本中引入的，它被称为索引查询运算符，用于在类型层面上工作并返回一个文字联合类型。
 * 这个关键字已经成为TypeScript中高级类型的基石，并在代码中经常使用‌。
 *
 * 更多参考 https://blog.csdn.net/qq_34629352/article/details/103557567
 */

interface IProps {
    name: string;
    count: number;
}

type Ikea = keyof IProps; // Ikea = 'name' | 'count'

function testKeyof(props: Ikea): void {
    const _length = props.length;
    console.log(`属性名称为 ${props}，长度为 ${_length}`);
}

// 因为变量 param 是 IKea 类型，因此其只能接受 字符串 "name" 或 "count" 作为其值。
let param: Ikea;
param = "name";
testKeyof(param);
param = "count";
testKeyof(param);
