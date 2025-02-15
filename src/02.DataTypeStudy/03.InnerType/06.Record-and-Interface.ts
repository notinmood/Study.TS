/**
 * @file   : 05.Record.abc.ts
 * @time   : 14:41
 * @date   : 2025/2/7
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "06.Record类型和Interface接口的辨析",
    description: "Record类型定义对象和Interface定义对象的区别",
};

/**
 * Record类型和Interface接口的区别
 * Record类型定义对象和Interface定义对象的区别
 * 1. 使用接口的方式定义一个具有固定属性的对象(需要先定义接口，然后再使用接口来定义对象，分为两步)
 * 2. 我们可以用Record类型来表示一个具有固定属性的对象，并且每个属性都有确定的类型。这种方式只需要一步就可以定义一个具有固定属性的对象。
 */

// 1. 使用接口的方式定义一个具有固定属性的对象(需要先定义接口，然后再使用接口来定义对象，分为两步)
interface IPerson {
    name: string;
    age: number;
    address: string;
}

const personInterface: IPerson = {
    name: "Alice",
    age: 25,
    address: "Beijing",
    // // 注意：Person类型中没有声明的属性"phone"，所以下面代码会报错。
    // phone: "1234567890"
};

// 2. 我们可以用Record类型来表示一个具有固定属性的对象，并且每个属性都有确定的类型。这种方式只需要一步就可以定义一个具有固定属性的对象。
const personRecord: Record<"name" | "age" | "address", string | number> = {
    name: "Alice",
    age: 25,
    address: "Beijing",
    //// 注意：PersonRecord类型中没有声明的属性"phone"，所以下面代码会报错。
    // phone: "1234567890"
};

console.log(personInterface);
console.log(personRecord);
