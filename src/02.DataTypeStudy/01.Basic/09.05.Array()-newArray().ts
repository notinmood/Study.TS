/**
 * @file   : 09.05.Array()-newArray().ts
 * @time   : 16:50
 * @date   : 2025/2/23
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: Less is more.Simple is best!
 */
export default {
    name: "09.05.Array()-newArray()",
    description: "",
};

import { ArrayHelper } from "BasicLibrary.ts/lib/data/arrayHelper";

const arr1: string[] = Array<string>("hello", "world");
const arr2: string[] = new Array<string>("hello", "world");

console.log(arr1, arr2); // ["hello", "world"] ["hello", "world"]

const type1 = typeof arr1;
const type2 = typeof arr2;

console.log(type1, type2); // "object" "object"

if (ArrayHelper.isEqual(arr1, arr2)) {
    console.log("arr1 === arr2");
} else {
    console.log("arr1 !== arr2");
}
