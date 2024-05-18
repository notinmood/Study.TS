/**
 * @file   : aa.ts
 * @time   : 10:23
 * @date   : 2022/4/19
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// +--------------------------------------------------------------------------
// |::说明·| 泛型数组 Array<Number> 和 Number[] 是等效的。
// +--------------------------------------------------------------------------
let myNumberArray1: Array<Number> = [1, 2, 3, 5];
let myNumberArray2: Number[] = [2, 4, 6];

// +--------------------------------------------------------------------------
// |::说明·| 泛型内的类型也可以是 | 类型
// +--------------------------------------------------------------------------
let myGenericArray: Array<Number | string> = [1, "qingdao", 5];
