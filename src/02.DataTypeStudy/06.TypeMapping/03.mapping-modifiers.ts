/**
 * @file   : 2.综合使用.ts
 * @time   : 7:15
 * @date   : 2022/5/2
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "03.映射修饰符（Mapping Modifiers）",
    description:
        "在使用映射类型时，有两个额外的修饰符可能会用到，一个是 readonly，用于设置属性只读，一个是 ? ，用于设置属性可选。你可以通过前缀 - 或者 + 删除或者添加这些修饰符，如果没有写前缀，相当于使用了 + 前缀。",
};

/* eslint-disable */

/**
 * 映射修饰符（Mapping Modifiers）
 * 在使用映射类型时，有两个额外的修饰符可能会用到，一个是 readonly，用于设置属性只读，一个是 ? ，用于设置属性可选。
 * 你可以通过前缀 - 或者 + 删除或者添加这些修饰符，如果没有写前缀，相当于使用了 + 前缀。
 */

// 删除属性中的只读特性
type CreateMutable<T> = { -readonly [P in keyof T]: T[P] };
type Account = { readonly id: string; readonly name: string };
type UnlockedAccount = CreateMutable<Account>; // {id: string;name: string;}

// 删除属性中的可选特性
type Concrete<T> = { [P in keyof T]-?: T[P] };
type MaybeUser = { id: string; name?: string; age?: number };
type User = Concrete<MaybeUser>; // {id: string; name: string;age: number;}

//添加属性中的只读特性
type CreateReadonly<T> = { readonly [P in keyof T]?: T[P] };
type MutableAccount = { id: string; name: string };
type LockedAccount = CreateReadonly<MutableAccount>; // {readonly id?: string, readonly name?: string}
