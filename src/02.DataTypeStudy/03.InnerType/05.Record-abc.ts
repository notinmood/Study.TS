/**
 * @file   : 05.Record.abc.ts
 * @time   : 14:41
 * @date   : 2025/2/7
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "05.Record类型的使用基础知识",
    description: "Record类型是TypeScript中一种内置的类型，它可以用来表示一个对象，其中每个属性都有确定的类型。",
};

/**
 * Record类型是TypeScript中一种内置的类型，它可以用来表示一个对象，其中每个属性都有确定的类型。
 * 它可以用来表示一个具有固定属性的对象，并且每个属性都有确定的类型。
 */

/**
 * 使用方式：
 * Record类型接受两个参数，第一个参数是属性的名称（用联合字符串表示），第二个参数是属性的类型。
 * 这里，我们用"name" | "age" | "address"来表示属性的名称，用string | number来表示属性的类型。
 */
const personRecord: Record<"name" | "age" | "address", string | number> = {
    name: "Alice",
    age: 25,
    address: "Beijing",
};

// 我们还可以用类型别名来简化代码：
type PersonRecordAlias = Record<"name" | "age" | "address", string | number>;

// 这样，我们就能用简化后的代码来表示PersonRecord类型。
const personRecordAlias: PersonRecordAlias = {
    name: "Alice",
    age: 25,
    address: "Beijing",
};

console.log(personRecord);
console.log(personRecordAlias);

// 最后，我们定义的Record类型，可以作为函数的参数类型使用：
function printPerson(person: PersonRecordAlias): void {
    console.log(person.name);
    console.log(person.age);
    console.log(person.address);
}

printPerson(personRecord);
printPerson(personRecordAlias);
