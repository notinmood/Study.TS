/**
 * @file   : 02.visit-object-member.ts
 * @time   : 15:08
 * @date   : 2025/2/22
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: Less is more.Simple is best!
 */

export default {
    name: "02.访问对象的成员的两种方式",
    description: "访问对象的成员的两种方式：使用点号(.)访问和使用方括号([])访问",
};

// 访问对象的成员有两种方式：
// 1. 使用点号(.)访问（可以通过IDE的智能提示，快速定位属性和方法。推荐。）
// 2. 使用方括号([])访问

// 两种方式的区别在于：
// 1. 使用点号(.)访问时，可以访问对象的属性和方法，而使用方括号([])访问时，只能访问对象的属性。
// 2. 使用方括号([])访问时，可以访问对象动态地指定属性的名称，而使用点号(.)访问时，只能访问对象的静态属性。

const person = {
    name: "ShanDong",
    age: 25,
    address: {
        city: "Beijing",
    },
};

// 示例1：使用点号(.)访问
console.log(person.name); // ShanDong
console.log(person.address); // { city: "Beijing" }
console.log(person.address.city); // Beijing

// 示例2：使用方括号([])访问
console.log(person["name"]); // ShanDong
console.log(person["address"]); // { city: "Beijing" }
console.log(person["address"]["city"]); // Beijing

// 示例3：以下演示了使用方括号([])访问时，可以访问对象动态地指定属性的名称。
const key = "age";
//方括号([])内本来应该是字符串“age”，但这里可以使用一个变量来代替，这样可以动态地指定属性的名称。
console.log(person[key]); // 25
