/**
 * @file   : 05.Record.abc.ts
 * @time   : 14:41
 * @date   : 2025/2/7
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "07.Record类型和索引签名的辨析",
    description: "Record类型定义对象和索引签名定义对象的区别",
};

/**
 * Record类型和索引签名的区别
 * 1. 我们可以用Record类型来表示一个具有固定属性的对象，并且每个属性都有确定的类型。
 * 2. 索引签名的方式定义一个具有非固定属性的对象，并且每个属性都有确定的类型。
 */

// 1. 我们可以用Record类型来表示一个具有固定属性的对象
const personRecord: Record<"name" | "age" | "address", string | number> = {
    name: "Alice",
    age: 25,
    address: "Beijing",
    //// 注意：PersonRecord类型中没有声明的属性"phone"，所以下面代码会报错。
    // phone: "1234567890"
};

// 2. 使用索引签名的方式定义一个具有非固定属性的对象
interface IPerson {
    //1. 索引签名的方式定义一个具有非固定的属性
    [key: string]: string | number;

    //2. 如果确定的属性名称，则可以使用传统的方式定义（不使用索引签名）
    name: string;
}

const personInterface: IPerson = {
    //1. 必须实现所有的固定属性，比如此例中的name；否则会报错。
    name: "Alice",
    age: 25,
    address: "Beijing",
    //2. 非固定的属性可以随意添加
    phone: "1234567890",
};

console.log(personRecord);
console.log(personInterface);
