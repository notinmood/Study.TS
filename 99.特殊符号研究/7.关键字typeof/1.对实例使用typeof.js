"use strict";
/**
 * @file   : index.ts
 * @time   : 10:55
 * @date   : 2022/4/28
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNameSpace = void 0;
var MyNameSpace;
(function (MyNameSpace) {
    var sem = { name: "zhangsan", age: 30 };
    var li = { name: "lisi", age: 20 };
    console.log(li);
    console.log('--typeof someVar 可以赋值给 type 的变量然后再定义变量使用；但不能打印，打印出来就只显示 object 了。--');
    console.log(typeof sem); //object
    //2. 字面量实例
    var someObject = {
        obj: {
            one: 1
        },
        arr: [1, 2, 4],
        num: 1
    };
    //{
    // obj: {
    // one: number;
    // };
    // arr: number[];
    // num: number;
    //}
    // 但打印出来，就是 object
    console.log("但打印出来，就是 object");
    console.log(typeof someObject); //object
})(MyNameSpace || (exports.MyNameSpace = MyNameSpace = {}));
