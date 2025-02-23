/**
 * @file   : 09.04.Bool()-newBool().ts
 * @time   : 15:43
 * @date   : 2025/2/23
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: Less is more.Simple is best!
 */

export default {
    name: "09.04.Bool()-newBool()",
    description: "new Bool() 构造函数",
};
// 1. 创建 Boolean 实例

//1.1. 简写形式
const bool1 = true;
console.log(bool1); // true
console.log(typeof bool1); // boolean

//1.2. 完整形式
const bool2 = Boolean(true);
console.log(bool2); // true
console.log(typeof bool2); // boolean

//1.3. 构造函数形式（调用 new Boolean() 构造函数，传入 true 或者 false 值，返回对应的布尔对象（对象类型），而不是布尔值。）
const bool3 = new Boolean(true);
console.log(bool3); // [Boolean: true]
console.log(typeof bool3); // object

// 2. Boolean对象到布尔值的转换
const bool4 = bool3.valueOf();
console.log(bool4); // true
console.log(typeof bool4); // boolean
