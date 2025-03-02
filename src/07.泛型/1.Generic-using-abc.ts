/**
 * @file   : aa.ts
 * @time   : 10:23
 * @date   : 2022/4/19
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
export default {
    name: "1.入门",
    description: "TypeScript 泛型的基本使用",
};

// +--------------------------------------------------------------------------
// |::说明·| 泛型数组 Array<Number> 和 Number[] 是等效的。
//         更多内容请查看文件`x.GenericAndArray.ts`。
// +--------------------------------------------------------------------------
const myNumberArray1: Array<number> = [1, 2, 3, 5];
const myNumberArray2: number[] = [2, 4, 6];

console.log(myNumberArray1);
console.log(myNumberArray2);

// +--------------------------------------------------------------------------
// |::说明·| 泛型内的类型也可以是 | 类型
// +--------------------------------------------------------------------------
const myGenericArray: Array<number | string> = [1, "qingdao", 5];
console.log(myGenericArray);
