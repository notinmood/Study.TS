/**
 * @file   : 09.moreUsing.ts
 * @time   : 09:09
 * @date   : 2025/2/9
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "09.lodash的更多用法",
    description: "lodash的更多用法，包括数组、对象、函数等的操作方法。",
};

// 使用实例(map、filter、 debounce防抖等工具类)
import { map, filter, debounce } from "lodash-es";
const numbers = [1, 2, 3, 4, 5];

// map方法
const doubledNumbers = map(numbers, (num) => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// filter方法
const oddNumbers = filter(numbers, (num) => num % 2 !== 0);
console.log(oddNumbers); // [1, 3, 5]

// debounce防抖方法
const debouncedFunc = debounce(() => {
    console.log("debouncedFunc");
}, 2000);

debouncedFunc(); // 2秒后打印"debouncedFunc"
