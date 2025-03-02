/**
 * @file   : 2.映射类型[ K in keyof T].ts
 * @time   : 22:54
 * @date   : 2022/4/29
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
export default {
    name: "02.类型映射和泛型",
    description: "结合泛型和类型映射的语法，来实现更通用的类型映射。",
};

// +--------------------------------------------------------------------------
// |::说明·| 固定的语法 [K in keyof T] ，K表示全部 T 中的键被拆分成的一个个键。
//  它的语法与索引签名的语法类似，内部使用了 for .. in。 具备三个部分：
//  1. 类型变量 K，它会依次绑定到每一个属性。
//  2. 字符串字面量联合的 Keys，它包含了要迭代的属性名的集合。
//  3. 类型表达式 T[K]，它表示当前的属性值。
// +--------------------------------------------------------------------------

/* eslint-disable */

const someData = {
    obj: {
        one: 1,
    },
    num: 2,
};

/**
 * 使用类型映射语法定义新类型
 */
type getType<T> = {
    [K in keyof T]: T[K];
};

// 1. 以下两种方式结果是相同的，其中第一种方式使用映射类型的方式的实现；第二种方式使用TypeScript的 typeof 关键字的标准实现。
type instance1 = getType<typeof someData>; //{obj: {one: number}, num: number}
type instance2 = typeof someData; //{obj: {one: number}, num: number}

/**
 * 但使用映射的方式，可以提前一步对类型进行约束
 */
type getTypeGen<T extends { num: number }> = { [K in keyof T]: T[K] };
type instance3 = getTypeGen<typeof someData>; // {obj: {one: number}, num: number}

// 2. 能够对 T[K] 作一些处理。
//比如使用 extends 对类型进行判定和转换
type getTypeX<T> = {
    [K in keyof T]: T[K] extends object ? 1 : 0;
};
//object类型转换为字面量1，其余类型为0
type instanceX = getTypeX<typeof someData>; //{obj: 1;num: 0;}
