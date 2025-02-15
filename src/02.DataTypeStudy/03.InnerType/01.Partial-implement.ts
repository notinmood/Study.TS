/**
 * @file   : index.ts
 * @time   : 6:30
 * @date   : 2022/4/29
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
import { Human } from "../../00.res/Human";

export default {
    name: "Partial的手工实现",
    description: "使用`?`这个可选符号，手工实现 Partial<T> 类型。",
};

/**
 * 使用`?`这个可选符号，用在某个类型的成员后面，表示该成员可选。
 * 另外：
 * 1. keyof Human 得到 Human 类型的所有成员的名称，
 * 2. 然后用 `in` 运算符遍历 Human 类型的所有成员的名称，
 * 3. 对于每个成员的名称，用 `?` 运算符标记该成员可选，
 * 4. Human[K] 得到该成员的类型，
 * 5. 最后用 `{ [K in keyof Human]?: Human[K] }` 这个类型表示法，表示一个对象，其成员的类型是 Human 类型的所有成员的可选类型。
 */

type partOfHuman = { [K in keyof Human]?: Human[K] };
const myData: partOfHuman = {
    name: "qingdao",
    eat() {},
};

console.log(myData); //{ name:'qingdao', eat:[Function: eat]}
