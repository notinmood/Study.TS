/**
 * @file   : 07.Array-more.ts
 * @time   : 15:33
 * @date   : 2025/2/22
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: Less is more.Simple is best!
 */
export default {
    name: "07.数组的各种方法",
    description: "数组的一些常用方法",
};

// 数组的一些常用方法
// 1. push() 方法：向数组的末尾添加一个或多个元素，并返回新的长度。
const arr1 = [1, 2, 3];
arr1.push(4, 5, 6);
console.log(arr1); // [1, 2, 3, 4, 5, 6]

// 2. pop() 方法：删除并返回数组的最后一个元素。
const arr2 = [1, 2, 3];
arr2.pop();
console.log(arr2); // [1, 2]

// 3. shift() 方法：删除并返回数组的第一个元素。
const arr3 = [1, 2, 3];
arr3.shift();
console.log(arr3); // [2, 3]

// 4. unshift() 方法：向数组的开头添加一个或多个元素，并返回新的长度。
const arr4 = [1, 2, 3];
arr4.unshift(0, -1);
console.log(arr4); // [-1, 0, 1, 2, 3]

// 5. reverse() 方法：颠倒数组中元素的顺序。
const arr5 = [1, 2, 3];
arr5.reverse();
console.log(arr5); // [3, 2, 1]

// 6. sort() 方法：对数组元素进行排序。
const arr6 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
arr6.sort();
console.log(arr6); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

// 7. splice() 方法：通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。
// 参数的格式：第一个参数是开始索引，第二个参数是删除的元素个数，第三、四...个参数是要添加的元素。
const arr7 = [1, 2, 3, 4, 5];
arr7.splice(2, 0, 0); // 从索引 2 开始，删除 0 个元素，然后插入数据 0
console.log(arr7); // [1, 2, 0, 3, 4, 5]
arr7.splice(2, 1, 10, 11); // 从索引 2 开始删除 1 个元素，然后插入 10 和 11
console.log(arr7); // [1, 2, 10, 11, 3, 4, 5]
arr7.splice(2, 2); // 从索引 2 开始删除 2 个元素
console.log(arr7); // [1, 2, 3, 4, 5]

// 8. find() 方法：返回数组中满足提供的测试函数的第一个元素的值。 如果没有找到这样的元素，则返回 undefined。
const arr8 = [5, 12, 8, 130, 44];
const found = arr8.find(function (element) {
    return element > 10;
});
console.log(found); // 12

// 9. findIndex() 方法：返回数组中满足提供的测试函数的第一个元素的索引。 如果没有找到这样的元素，则返回 -1。
const arr9 = [5, 12, 8, 130, 44];
const index = arr9.findIndex(function (element) {
    return element > 10;
});
console.log(index); // 1

// 10. fill() 方法：用一个值填充数组中从起始索引到终止索引内的全部元素。
const arr10 = [1, 2, 3, 4];
arr10.fill(0, 2, 4);
console.log(arr10); // [1, 2, 0, 0]

// 11. copyWithin() 方法：在数组内部，从一段元素开始复制元素，并覆盖原有位置，然后返回它本身。
const arr11 = [1, 2, 3, 4, 5];
arr11.copyWithin(0, 3);
console.log(arr11); // [4, 5, 3, 4, 5]
arr11.copyWithin(1, 0, 2);
console.log(arr11); // [4,4,5,4,5 ]
