// // 使用var声明
// for (var i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(i); // 输出 10 个 10
//     }, 1000*i);
// }
//


// // 或者使用let声明
// for (let i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i); // 输出 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
//     }, 1000 * i);
// }


// // 修改如下。此时输出undefined，这是因为setTimeout中的定义的i跟for内定义的i没有任何关系。
// for (let i = 0; i < 10; i++) {
//     setTimeout((i) => {
//         console.log(i); // 输出 10个 “undefined”
//     }, 1000 * i);
// }

// // 此时输出undefined，这是因为setTimeout中的定义的i跟for内定义的i没有任何关系。
// for (var i = 0; i < 10; i++) {
//     setTimeout((i) =>   {
//         console.log(i); // 输出 10个 “undefined”
//     }, 1000 * i);
// }

// // 或者使用箭头函数(箭头函数是立即执行函数的语法糖)
// for (let i = 0; i < 10; i++) {
//     setTimeout(() =>  console.log(i), 1000 * i);// 输出 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// }

// 或者使用箭头函数(箭头函数是立即执行函数的语法糖)
for (var i = 0; i < 10; i++) {
    setTimeout(() =>  console.log(i), 1000 * i);// 输出 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
}
console.log("执行中");
