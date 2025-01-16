/**
 * @file   : 03.dynamicProperty.ts
 * @time   : 17:30
 * @date   : 2025/1/16
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// 动态属性
type ApiResponse = {
    status: string;
    message: string;
    [resource: string]: unknown;
};

const response: ApiResponse = {
    status: "success",
    message: "Data fetched successfully",
    users: [
        { id: 1, name: "John" },
        { id: 2, name: "Doe" },
    ],
    products: [{ id: 1, name: "Laptop", price: 1000 }],
    // 你可以在不改变类型的情况下添加更多的资源
};

// 访问动态属性
console.log(response.users);
// 输出: [{ id: 1, name: "John" }, { id: 2, name: "Doe" }]
console.log(response.products);
// 输出: [{ id: 1, name: "Laptop", price: 1000 }]
