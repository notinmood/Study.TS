/**
 * @file   : 07.1.Array-abc.ts
 * @time   : 16:38
 * @date   : 2025/2/23
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: Less is more.Simple is best!
 */

export default {
    name: "07.1.Array基础",
    description: "TypeScript数组的基础知识",
};

//1. 数组的定义

//1.1. 使用[]定义数组
const arr1: number[] = [1, 2, 3];
console.log(arr1);

const arr2: (number | string)[] = [1, "hello", 2, "world"];
console.log(arr2);

const arr3: Array<string> = ["hello", "world"];
console.log(arr3);

const arr4: Array<number | string> = [1, "hello", 2, "world"];
console.log(arr4);

/* eslint-disable-next-line */
const arr5: Array<any> = [1, "hello", 2, "world"];
console.log(arr5);

/* eslint-disable-next-line */
const arr6: any[] = [1, "hello", 2, "world"];
console.log(arr6);

//1.2. 使用Array构造函数定义数组
const arr7: string[] = Array<string>("hello", "world");
const arr8: string[] = new Array<string>("hello", "world");

console.log(arr7, arr8);

const arr9 = typeof arr7;
const arr10 = typeof arr8;

console.log(arr9, arr10);
