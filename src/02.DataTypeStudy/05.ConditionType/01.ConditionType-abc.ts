/**
 * @file   : 1.extends三目运算符的使用.ts
 * @time   : 17:55
 * @date   : 2022/4/26
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "1.条件类型入门-extends三目运算符的使用",
    description:
        "extends 运算符可以用来判断一个类型是否是另一个类型的子类型。如果是，则返回第一个类型，否则返回第二个类型。",
};

interface Animal {
    live(): void;
}

interface Dog extends Animal {
    woof(): void;
}

type Example1 = Dog extends Animal ? number : string; // type Example1 = number
type Example2 = RegExp extends Animal ? number : string; //type Example2= string

const _name1: Example1 = 123;
console.log(_name1);
const _name2: Example2 = "qingdao";
console.log(_name2);

// 以下代码会报错
// const _name3: Example1 = "qingdao";
// const _name4: Example2 = 123;
