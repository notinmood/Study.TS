/**
 * @file   : 0.条件类型入门.ts
 * @time   : 8:57
 * @date   : 2022/4/27
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
export default {
    name: "00.为什么需要条件类型",
    description: "为什么TypeScript需要条件类型？",
};

// 为什么需要条件类型？
// 在TypeScript使用过程中，我们一般会直接指定具体类型，比如：
const str: string = "test!";
console.log(str);

// 然而，我们在编写代码的过程中，会遇到不能明确指定其具体类型的情况，比如：
declare function f<T extends boolean>(x: T): T extends true ? string : number;

// Type is 'string | number'
const x = f(Math.random() < 0.5);
console.log(x);

// Type is 'number'
const y = f(false);
console.log(y); //

// Type is 'string'
const z = f(true);
console.log(z);

// 在编写函数 f 时，只知道返回值的范围，但不知道其具体类型，
// 其具体类型需要等到函数执行时进行确定，换句话说只有类型系统中给出 充足的条件 之后,
// 它才会根据条件推断出类型结果。

// 上文说到只有类型系统中给出 充足的条件 之后,它才会根据条件推断出类型结果，如果判断条件不足，则会得到第三种结果，即 推迟 条件判断，等待充足条件。
// 例如：
interface Foo {
    propA: boolean;
    propB: boolean;
}

declare function f<T>(x: T): T extends Foo ? string : number;

function foo<U>(x: U) {
    // 因为 ”x“ 未知，因此判断条件不足，不能确定条件分支，推迟条件判断直到 ”x“ 明确，
    // 推迟过程中，”a“ 的类型为分支条件类型组成的联合类型，
    // string | number
    const a = f(x);

    // 这么做是完全可以的
    const b: string | number = a;
}
