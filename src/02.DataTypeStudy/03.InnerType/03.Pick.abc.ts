/**
 * @file   : 3.1.Pick的使用.ts
 * @time   : 11:42
 * @date   : 2022/5/4
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
export default {
    name: "03.Pick的使用",
    description: "Pick就是从一个类型中挑选出指定的属性，并返回一个新的类型。",
};

/**
 * Pick用法说明:
 * Pick<T, K extends keyof T>
 * T: 要从中挑选的类型
 * K: 要挑选的属性的键（字符串类型的键名的联合类型）
 * 返回值: 新的类型，只包含K中指定的属性
 */

interface IUser {
    id: number;
    age: number;
    name: string;
}

type Picked1 = Pick<IUser, "id">; //{id: number}
type Picked2 = Pick<IUser, "id" | "age">; //{id: number, age: number}

// 以下代码无法编译通过，因为 city 不是 User 的成员
// type Picked3 = Pick<User, "id" | "city">;

const picked1: Picked1 = { id: 1 };
console.log("Picked1:", picked1);
const picked2: Picked2 = { id: 1, age: 20 };
console.log("Picked2:", picked2);
