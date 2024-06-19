/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2024/6/19 09:28:49
 * @FilePath     : map的使用.ts
 * @Description  :
 * Copyright (c) 2024 by Hiland & RainyTop, All Rights Reserved.
 */

/**
 * map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
 * map() 方法是数组实例的成员，它接收两个参数：
 * 第一个参数是回调函数，该函数对每个元素进行处理，第二个参数是可选的，表示 this 对象的上下文。
 * map() 方法返回一个新数组，包含原数组中的每个元素经过处理后得到的结果。
 * 注意：map() 方法不会改变原数组，而是返回一个新数组。
 *
 * map()是在数组实例上调用的。（这一点跟Python中的map()函数不一样，Python中的map()函数总被迭代的对象是作为第二个参数出现的。）
 */
export {};
const myArr: number[] = [1, 2, 3, 4, 5];

// 回调函数可以是一个匿名函数
const doubleArr: number[] = myArr.map(function (item) {
    return item * 2;
});
console.log(doubleArr); // [2, 4, 6, 8, 10]

// 也可以使用箭头函数作为回调函数
const tripleArr: number[] = myArr.map((item) => item * 3);
console.log(tripleArr); // [3, 6, 9, 12, 15]
