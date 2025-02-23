/**
 * @file   : 06.Array-vs-Tuple.ts
 * @time   : 10:28
 * @date   : 2025/2/22
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: Less is more.Simple is best!
 */
export default {
    name: "07.4.数组和元组对比",
    description: "数组和元组的区别",
};

// 数组和元组的区别

// 1. 类型系统：数组是使用泛型，元组是使用数组。
// 2. 元素个数：数组可以存储多个元素，元组只能存储固定数量的元素。
// 3. 元素类型：数组可以存储不同类型的元素，元组只能存储同一种类型元素。
// 4. 索引：数组的索引是从0开始，可以动态调整大小；元组的索引是固定的，不能动态调整大小。
// 5. 性能：数组的性能比元组要好，因为数组是动态的，可以根据需要调整大小；元组的性能比数组要好，因为元组是不可变的，大小是固定的。
// 6. 应用场景：数组适用于需要动态调整大小的场景，比如数组列表、栈、队列、缓冲区等；元组适用于需要固定数量的元素的场景，比如坐标、颜色、尺寸等。

// 总结：数组和元组都是集合，都可以存储多个值，但是数组是动态的，可以根据需要调整大小，而元组是固定数量的元素，不能动态调整大小。

// 1.1 数组的声明方式：
const arr1: number[] = [1, 2, 3];
const arr2: Array<number> = [4, 5, 6];

// 1.2 元组的声明方式：
const tuple1: [number, string] = [1, "hello"];
const tuple2: [number, string, boolean] = [2, "world", true];

// 2.1 数组的长度：
console.log(arr1.length); // 3
console.log(arr2.length); // 3

// 2.2 元组的长度：
console.log(tuple1.length); // 2
console.log(tuple2.length); // 3

// 3.1 数组的索引方式：
console.log(arr1[0]); // 1
console.log(arr2[1]); // 5

// 3.2 元组的索引方式：
console.log(tuple1[0]); // 1
console.log(tuple2[1]); // "world"

// 4.1 数组的遍历方式：
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

// 4.2 元组的遍历方式：
for (let i = 0; i < tuple1.length; i++) {
    console.log(tuple1[i]);
}
for (let i = 0; i < tuple2.length; i++) {
    console.log(tuple2[i]);
}

// 5.1 数组的操作方式：
arr1.push(4); // [1, 2, 3, 4]
arr1.pop(); // [1, 2, 3]
arr1.unshift(0); // [0, 1, 2, 3]
arr1.shift(); // [1, 2, 3]
arr1.splice(1, 1, 6); // [1, 6, 3] // 从索引位置1开始删除1个元素，然后插入6
arr1.sort(); // [1, 3, 6]
arr1.reverse(); // [6, 3, 1]

// 5.2 元组的操作方式：
// 元组是不可变的，不能进行修改操作。
