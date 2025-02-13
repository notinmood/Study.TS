/**
 * @file   : 6.2.keyof.using_typeof.ts
 * @time   : 13:59
 * @date   : 2025/2/13
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "6.2.keyof和typeof的配合使用",
    description: "使用typeof关键字和keyof关键字结合使用，可以获得某个对象的所有属性的key。",
};

// 1.typeof关键字（获取对象所对应的类型）
// typeof关键字可以获得一个变量的类型，返回值是一个字符串。
// 例如：typeof "hello" === "string"

// 2.keyof关键字（获取类型的所有属性）
// keyof关键字可以获得一个对象类型的所有属性的key。
// 例如：keyof {name: string, age: number} === "name" | "age"

// 3.结合使用
// 结合使用typeof关键字和keyof关键字，可以获得某个对象的所有属性的key。
// 例如：typeof {name: string, age: number} === "object"
// typeof {name: string, age: number}["name"] === "string"
// typeof {name: string, age: number}["age"] === "number"
// keyof {name: string, age: number} === "name" | "age"

// 4.注意事项
// 1）typeof关键字只能用于变量，不能用于对象。
// 2）keyof关键字只能用于对象类型，不能用于变量。

// 5.示例代码
interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: "Alice",
    age: 25,
};

//0.1 获取对象的类型
type PersonType = typeof person; // 类型 Person

//0.2 获取类型所有属性的key
//以下两种方式都可以获得Person的所有属性的key。(因为Person和PersonType是一样的)
type PersonKeys = keyof PersonType; // 类型 "name" | "age"
// type PersonKeys = keyof Person; // 类型 "name" | "age"

//0.3 获取整体类型某个子属性的类型
type NameType = PersonType["name"]; // 类型 string
type AgeType = PersonType["age"]; // 类型 number

// 1. 使用PersonType
// 使用PersonType和Person定义对象的效果是一样的。因为PersonType就是Person。
const myPerson: PersonType = {
    name: "Bob",
    age: 30,
};
console.log(myPerson);

//2. 使用PersonKeys
let myKeys: PersonKeys = "name";
console.log(myKeys);
myKeys = "age";
console.log(myKeys);
// // myKeys是PersonKeys类型（"name" | "age"这两个字符串的联合类型，构成字符串字面量类型），
// // 但是实际上只能赋值为"name"或"age"，不能赋值为其他字符串（包括"name" | "age"，因为"name" | "age"不是一个字符串，而是两个字符串构成的联合类型了）。
// //以下两行代码都会报错：
// myKeys= "sex";
// myKeys = "name" | "age";

//3. 使用NameType和AgeType
let myName: NameType = "Alice";
console.log(myName);
myName = "Bob";
console.log(myName);

let myAge: AgeType = 25;
console.log(myAge);
myAge = 30;
console.log(myAge);
