/**
 * @file   : 02.defineTypeUseIndexSignature.ts
 * @time   : 17:23
 * @date   : 2025/1/16
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    title: "用索引签名定义类型",
};

// 索引签名的定义：
type Product = {
    name: string;
    price: number;
    stock: {
        [size: string]: number; // 索引签名
    };
};

// 索引签名的使用：
const product: Product = {
    name: "iPhone",
    price: 899,
    stock: {
        S: 100,
        M: 50,
        L: 20,
    },
};

console.log(product.stock["S"]); // 100
console.log(product.stock.M); // 50

// 索引签名的作用：
// 索引签名允许我们为对象添加额外的约束条件，使其具有某种索引签名。
// 索引签名的语法是[key: type]，其中key表示索引的类型，type表示索引对应的值的类型。
// 索引签名可以让我们在编译时就知道对象中存在哪些索引，以及索引对应的值的类型。
// 索引签名可以让我们在代码中更加灵活地使用对象，因为我们可以根据索引的类型来获取值，而不需要使用字符串。
