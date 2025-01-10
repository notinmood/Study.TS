/**
 * @file   : 1.compilerOptions.types配置项.ts
 * @time   : 8:52
 * @date   : 2022/4/28
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// compilerOptions.noImplicitThis 用于控制对this类型的隐式推断行为。具体来说，当此属性设置为true时，它要求在使用this时必须显式地指定其类型，否则编译器会报错。以下是该选项的详细解释和用途：
// => 含义
// 禁止隐式this类型：当设置为true时，TypeScript编译器会禁止在没有明确指定this类型的情况下使用this。这意味着在对象字面量的方法、箭头函数、类的方法等场景中，你必须显式地声明this的类型，否则编译器会报错.
// 提高代码可读性和可维护性：通过强制显式声明this类型，可以使得代码的意图更加明确，便于其他开发者理解和维护代码。它有助于避免因this类型不明确而导致的潜在错误和混淆.
// => 用途
// 增强类型安全性："noImplicitThis": true选项增强了TypeScript的类型安全性，确保在使用this时，其类型是明确和一致的。这有助于在编译阶段发现潜在的类型错误，避免在运行时出现因this类型不匹配而导致的错误.
// 支持复杂的类型场景：在一些复杂的类型场景中，如使用泛型或复杂的类型结构时，显式声明this类型可以帮助编译器更准确地推断类型，从而提供更好的类型检查和代码提示.
// 促进良好的编程习惯：该选项鼓励开发者养成良好的编程习惯，即在使用this时始终显式声明其类型。这有助于提高代码的可读性和可维护性，减少因隐式类型推断带来的问题.

const obj = {
    name: "Alice",
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
};

console.log(obj);
