/**
 * @file   : 5.使用extends做类型关系判断.ts
 * @time   : 15:30
 * @date   : 2022/4/26
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "3.【条件类型】extends用于类型关系判断",
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


//其中
type aa = keyof Animal; // "name" | "age" | "run" | "eat"
type bb = "name" | "age" | "run" | "eat";

type cc = [keyof Animal]; // ["name" | "age" | "run" | "eat"]
type dd = ["name" | "age" | "run" | "eat"];


type xx = { [K in keyof Animal] };// {name: *, age: *, run: *, eat: *} // 其中*表示任意类型
type yy = { [K in keyof Animal]: 0 }; //{name: 0, age: 0, run: 0, eat: 0}
type zz = { [K in keyof Animal]: Animal[K] }; //{name: string, age: number, run(): void, eat(food: string): void}

const bar: xx = {"name": true, "age": "string", "run": 0, "eat": 0};

type temp<T> = { [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never };
type AnimalMethodNames2 = temp<Animal>; // {name: Animal["name"] extends ((...args: any[]) => any) ? "name" : never, age: Animal["age"] extends ((...args: any[]) => any) ? "age" : never, run: Animal["run"] extends ((...args: any[]) => any) ? "run" : never, eat: Animal["eat"] extends ((...args: any[]) => any) ? "eat" : never}

