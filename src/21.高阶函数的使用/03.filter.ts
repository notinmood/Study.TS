/**
 * @file   : 03map的使用.ts
 * @time   : 14:02
 * @date   : 2025/2/7
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "filter的使用",
    description: "学习使用高阶函数filter",
};

const arr = [3, 5, 17, 15, 4, 14];

const result = arr.filter((item) => {
    return item > 5;
});

console.log(result); //[ 17, 15, 14 ]
