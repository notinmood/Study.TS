/**
 * @file   : 2.1.高级.通用签名和专项签名.ts
 * @time   : 7:02
 * @date   : 2022/5/1
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    title: "高级.所有的成员必须都符合签名",
};

type myType = { [index: string]: string | number; id: number; name: string };
const myData: myType = {
    id: 20,
    name: "zhangsan",
};
console.log(myData);

/**
 * 变量 myValue1 满足类型 myType 的签名，可以赋值给类型 myType 的变量 myTarget
 */
const myValue1 = { id: 21, name: "lisi" };
const myTarget: myType = myValue1;
console.log(myTarget);

/**
 * 变量 myValue2 不满足类型 myType 的签名，所以不可以赋值给类型 myType 的变量 myTarget
 */
const myValue2 = { id: 22, age: 20 };
// myTarget= myValue2;
console.log(myValue2);
