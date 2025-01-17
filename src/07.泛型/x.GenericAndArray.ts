/**
 * @file   : x.GenericAndArray.ts
 * @time   : 11:26
 * @date   : 2025/1/17
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// 传统数组和泛型数组。两者是等价的，定义方式和使用方式都一样。但是泛型数组更加灵活，可以指定元素的类型。

// 1. 使用泛型的Array<T>
const arr1: Array<number> = [1, 2, 3];
const arr2: Array<string> = ["a", "b", "c"];

// 多维数值可以嵌套T
const arr3: Array<Array<number>> = [
    [1, 2],
    [3, 4],
];
const arr4: Array<Array<string>> = [
    ["a", "b"],
    ["c", "d"],
];

// 2. 使用数组 T[]
const arr5: number[] = [1, 2, 3];
const arr6: string[] = ["a", "b", "c"];

// 2.1 多维数组可以叠加使用[][]
const arr7: number[][] = [
    [1, 2],
    [3, 4],
];
const arr8: string[][] = [
    ["a", "b"],
    ["c", "d"],
];

// 3. 具体使用
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(arr6);
console.log(arr7);
console.log(arr8);
