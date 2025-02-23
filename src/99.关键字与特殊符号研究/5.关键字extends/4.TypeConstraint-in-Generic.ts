/**
 * @file   : 4.TypeConstraint.ts
 * @time   : 16:28
 * @date   : 2025/2/22
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: Less is more.Simple is best!
 */

// 类型约束
export default {
    name: "4.泛型中的类型约束",
    description:
        "类型约束是指在泛型函数或泛型类中，对传入的参数或返回值的类型进行限制，以确保函数或类在使用时符合预期。",
};

// 类型约束是指在泛型函数或泛型类中，对传入的参数或返回值的类型进行限制，以确保函数或类在使用时符合预期。
// 类型约束的作用主要有以下几点：
// 1. 提高代码的可读性和可维护性。
// 2. 减少运行时错误。
// 3. 提高代码的健壮性。

interface Person {
    name: string;
    age: number;
}

//约束T必须是Person类型或者其子类型
function greet<T extends Person>(user: T): string {
    return `Hello, my name is ${user.name} and I am ${user.age} years old.`;
}

const user: Person = { name: "Alice", age: 28 };
console.log(greet<Person>(user));
console.log(greet(user)); // 调用时泛型类型参数可以省略，因为它可以推断出是Person类型
