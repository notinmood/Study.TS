/**
 * @file   : 05.Record.abc.ts
 * @time   : 14:41
 * @date   : 2025/2/7
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "Record类型的使用基础知识",
    description: "Record类型是TypeScript中一种内置的类型，它可以用来表示一个对象，其中每个属性都有确定的类型。",
};

// Record类型是TypeScript中一种内置的类型，它可以用来表示一个对象，其中每个属性都有确定的类型。
// 它可以用来表示一个具有固定属性的对象，并且每个属性都有确定的类型。
// 例如：

interface Person {
    name: string;
    age: number;
    address: string;
}

const personAlice: Person = {
    name: "Alice",
    age: 25,
    address: "Beijing",
};

console.log(personAlice);
//
// // 我们可以用Record类型来表示一个具有固定属性的对象，并且每个属性都有确定的类型。
//
// interface PersonRecord {
//     name: string;
//     age: number;
//     address: string;
// }
//
// const personRecord: Record<"name" | "age" | "address", string | number> = {
//     name: "Alice",
//     age: 25,
//     address: "Beijing",
// };
//
// // 这里，我们用Record类型来表示一个具有固定属性的对象，并且每个属性都有确定的类型。
// // 其中，Record类型接受两个参数，第一个参数是属性的名称，第二个参数是属性的类型。
// // 这里，我们用"name" | "age" | "address"来表示属性的名称，用string | number来表示属性的类型。
// // 这样，我们就能确保PersonRecord类型中每个属性都有确定的类型。
//
// // 我们还可以用类型别名来简化代码：
//
// type PersonRecordAlias = Record<"name" | "age" | "address", string | number>;
//
// const personRecordAlias: PersonRecordAlias = {
//     name: "Alice",
//     age: 25,
//     address: "Beijing",
// };
//
// // 这样，我们就能用简化后的代码来表示PersonRecord类型。
//
// // 最后，我们可以用类型断言来检查一个变量是否是Record类型：
//
// function printPerson(person: PersonRecord): void {
//     console.log(person.name);
//     console.log(person.age);
//     console.log(person.address);
// }
//
// printPerson(personRecord);
// printPerson(personRecordAlias);
//
// // 这样，我们就能确保printPerson函数只接受PersonRecord类型。
//
// // 总结：
// // Record类型是TypeScript中一种内置的类型，它可以用来表示一个对象，其中每个属性都有确定的类型。
// // 它可以用来表示一个具有固定属性的对象，并且每个属性都有确定的类型。
// // 我们可以用Record类型来表示一个具有固定属性的对象，并且每个属性都有确定的类型。
// // 我们还可以用类型别名来简化代码。
// // 最后，我们可以用类型断言来检查一个变量是否是Record类型。
