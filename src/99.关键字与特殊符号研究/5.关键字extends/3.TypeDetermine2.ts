/**
 * @file   : 5.使用extends做类型关系判断.ts
 * @time   : 15:30
 * @date   : 2022/4/26
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "3.extends用于类型关系判断",
    description: "结合泛型一起使用extends关键字做类型关系判断",
};

// // 类型兼容性判断通常结合泛型一起使用
interface Animal {
    name: string;
    age: number;

    run(): void;
    eat(food: string): void;
}

// 将接口中所有的方法提取出来。其中 (...args: any[]) => any 代表任意参数和任意返回值的函数类型。
/* eslint-disable-next-line */
type methodNames<T> = { [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never }[keyof T];

/* eslint-disable */
type AnimalMethodNames = methodNames<Animal>; // "run" | "eat"
