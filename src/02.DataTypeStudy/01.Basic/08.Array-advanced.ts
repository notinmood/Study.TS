/**
 * @file   : 08.Array-advanced.ts
 * @time   : 15:37
 * @date   : 2025/2/22
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: Less is more.Simple is best!
 */

export default {
    name: "08.数组的高级用法",
    description: "数组的高级用法，包括数组迭代器、数组方法、数组迭代器的应用等。",
};

// // 12. entries() 方法：返回一个新的 Array Iterator 对象，该对象包含数组中每个索引的键/值对。
// const arr12 = [1, 2, 3];
// let iterator = arr12.entries();
// console.log(iterator.next().value); // [0, 1]
// console.log(iterator.next().value); // [1, 2]
// console.log(iterator.next().value); // [2, 3]
// console.log(iterator.next().done); // true
// // 13. keys() 方法：返回一个新的 Array Iterator 对象，该对象包含数组中每个索引的键。
// const arr13 = [1, 2, 3];
// let iterator = arr13.keys();
// console.log(iterator.next().value); // 0
// console.log(iterator.next().value); // 1
// console.log(iterator.next().value); // 2
// console.log(iterator.next().done); // true
// // 14. values() 方法：返回一个新的 Array Iterator 对象，该对象包含数组中每个索引的值。
// const arr14 = [1, 2, 3];
// let iterator = arr14.values();
// console.log(iterator.next().value); // 1
// console.log(iterator.next().value); // 2
// console.log(iterator.next().value); // 3
// console.log(iterator.next().done); // true
// // 15. toLocaleString() 方法：根据主机环境的语言环境，返回一个字符串，该字符串表示数组中的元素。
// const arr15 = [1000, 500, 100];
// console.log(arr15.toLocaleString()); // 1,000 500 100
// // 16. join() 方法：将数组中的所有元素转换为字符串，并使用指定的分隔符进行分隔。
// const arr16 = [1, 2, 3];
// console.log(arr16.join()); // 1,2,3
// console.log(arr16.join(" ")); // 1 2 3
// console.log(arr16.join("")); // 123
// // 17. flat() 方法：将嵌套数组展开为一个一维数组。
// const arr17 = [1, 2, [3, 4], [5, [6, 7]]];
// console.log(arr17.flat()); // [1, 2, 3, 4, 5, 6, 7]
// console.log(arr17.flat(2)); // [1, 2, 3, 4, 5, [6, 7]]
// // 18. flatMap() 方法：首先使用映射函数映射每个元素，然后将结果展开为一个新数组。
// const arr18 = [1, 2, 3, 4];
// const doubled = arr18.flatMap((x) => [x, x * 2]);
// console.log(doubled); // [1, 2, 2, 4, 3, 6, 4, 8]
// // 数组的迭代器
// // 1. Array Iterator 对象
// // 数组迭代器是一种特殊的对象，它被用来遍历数组中的元素。 数组迭代器可以是任意的，但最常见的类型是 Array Iterator。 数组迭代器有两个主要的方法：next() 和 return()。
// // 数组迭代器的 next() 方法返回包含下一个元素的对象，如果没有更多的元素，则返回 {done: true}。 数组迭代器的 return() 方法结束迭代，并返回 {value: undefined, done: true}。
// // 2. for...of 循环
// // for...of 循环是一种新的循环语法，它可以用来遍历数组的元素。 它可以与数组迭代器一起使用，也可以与其他可迭代对象一起使用。
// const arr20 = [1, 2, 3];
// for (const value of arr20) {
//     console.log(value);
// }
// // 3. 数组迭代器的应用
// // 数组迭代器可以用来实现许多有用的功能。 例如，我们可以创建一个数组迭代器，它会遍历数组中的元素，并返回一个包含每个元素的平方值的新数组。
// function square(arr) {
//     const result = [];
//     const iterator = arr[Symbol.iterator]();
//     let current = iterator.next();
//     while (!current.done) {
//         result.push(current.value ** 2);
//         current = iterator.next();
//     }
//     return result;
// }
// const arr21 = [1, 2, 3];
// console.log(square(arr21)); // [1, 4, 9]
// // 我们还可以创建一个数组迭代器，它会遍历数组中的元素，并返回一个包含每个元素的索引和值的对象。
// function indexAndValue(arr) {
//     const result = [];
//     const iterator = arr[Symbol.iterator]();
//     let current = iterator.next();
//     while (!current.done) {
//         result.push({ index: iterator.i, value: current.value });
//         current = iterator.next();
//     }
//     return result;
// }
// const arr22 = [1, 2, 3];
// console.log(indexAndValue(arr22)); // [{index: 0, value: 1}, {index: 1, value: 2}, {index: 2, value: 3}]
// // 数组迭代器的 i 属性可以用来获取当前索引。 数组迭代器的 next() 方法也可以接受一个参数，该参数指定了要返回的元素数。 例如，如果我们想从数组迭代器中获取前 3 个元素，我们可以这样做：
// function firstThree(arr) {
//     const result = [];
//     const iterator = arr[Symbol.iterator]();
//     let current = iterator.next();
//     for (let i = 0; i < 3; i++) {
//         if (current.done) {
//             break;
//         }
//         result.push(current.value);
//         current = iterator.next();
//     }
//     return result;
// }
// const arr23 = [1, 2, 3, 4, 5];
// console.log(firstThree(arr23)); // [1, 2, 3]
// // 数组迭代器的 return() 方法可以用来结束迭代。 例如，如果我们想创建一个数组迭代器，它会遍历数组中的元素，并返回一个包含偶数值的新数组，直到遇到一个奇数值：
// function evenNumbers(arr) {
//     const result = [];
//     const iterator = arr[Symbol.iterator]();
//     let current = iterator.next();
//     while (!current.done) {
//         if (current.value % 2 === 0) {
//             result.push(current.value);
//         } else {
//             iterator.return();
//             break;
//         }
//         current = iterator.next();
//     }
//     return result;
// }
// const arr24 = [1, 2, 3, 4, 5];
// console.log(evenNumbers(arr24)); // [2, 4]
// // 数组迭代器的 Symbol.iterator 方法可以用来获取数组迭代器。 数组迭代器的 Symbol.iterator 方法返回一个函数，该函数返回数组迭代器。 例如，如果我们想创建一个数组迭代器，它会遍历数组中的元素，并返回一个包含每个元素的索引和值的对象，我们可以这样做：
// function indexAndValue(arr) {
//     const iterator = {
//         i: 0,
//         next: function () {
//             if (this.i < arr.length) {
//                 const result = { index: this.i, value: arr[this.i] };
//                 this.i++;
//                 return result;
//             } else {
//                 return { done: true };
//             }
//         },
//     };
//     return iterator;
// }
// const arr25 = [1, 2, 3];
// let iterator = indexAndValue(arr25);
// console.log(iterator.next()); // {index: 0, value: 1}
// console.log(iterator.next()); // {index: 1, value: 2}
// console.log(iterator.next()); // {index: 2, value: 3}
// console.log(iterator.next()); // {done: true}
