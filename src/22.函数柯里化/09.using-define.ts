/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2025/1/30 08:00:15
 * @FilePath     : curry.ts
 * @Description  :
 * Copyright (c) 2025 by Hiland & RainyTop, All Rights Reserved.
 */

export default {
    name: "09.using-define",
    description: "定义一个通用的curry函数",
};

// TODO:xiedali@2025/01/30 暂时使用any类型，后续需要修改为更具体的类型
// eslint-disable-next-line
export function curry<T>(fn: (...args: T[]) => any) {
    function curried(...args: T[]) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function (...args2: T[]) {
                const newArgs = [...args, ...args2]; // args.concat(args2);
                return curried(...newArgs);
            };
        }
    }

    return curried;
}
