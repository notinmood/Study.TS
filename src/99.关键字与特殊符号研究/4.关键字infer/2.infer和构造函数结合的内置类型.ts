/**
 * @file   : 2.infer和内置类型.ts
 * @time   : 7:12
 * @date   : 2022/5/6
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

/* eslint-disable */

export default {
    name: "2.infer和构造函数结合的内置类型",
    description: "infer 关键字结合构造函数的类型参数，可以获取构造函数的参数类型和返回值类型",
};

/**
 * 当 infer 用于构造函数类型中:
 * 可用于参数位置 new (...args: infer P) => any;
 * 和返回值位置 new (...args: any[]) => infer P;
 */

// 获取构造函数参数类型
type ConstructorParameters<T extends new (...args: any[]) => any> = T extends new (...args: infer P) => any ? P : never;

// 获取返回实例类型
type InstanceType<T extends new (...args: any[]) => any> = T extends new (...args: any[]) => infer R ? R : any;

class TestClass {
    constructor(
        public name: string,
        public age: number,
    ) {}
}

type Params = ConstructorParameters<typeof TestClass>; // [string, number]

type Instance = InstanceType<typeof TestClass>; // TestClass
