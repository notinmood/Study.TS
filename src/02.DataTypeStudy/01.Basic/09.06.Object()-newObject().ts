/**
 * @file   : 09.06.Object()-newObject().ts
 * @time   : 18:06
 * @date   : 2025/2/23
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: Less is more.Simple is best!
 */
import { ObjectHelper } from "BasicLibrary.ts/lib/data/objectHelper";

export default {
    name: "09.06.Object()-newObject()",
    description: "",
};

const obj1 = { name: "ShanDong", age: 25 };
console.log(obj1); // {name: "ShanDong", age: 25}
const type1 = typeof obj1; // object
console.log(type1);

const obj2 = Object({ name: "ShanDong", age: 25 });
console.log(obj2); // {name: "ShanDong", age: 25}
const type2 = typeof obj2; // object
console.log(type2);

const obj3 = new Object({ name: "ShanDong", age: 25 });
console.log(obj3); // {name: "ShanDong", age: 25}
const type3 = typeof obj3; // object
console.log(type3);

console.log(obj1 === obj2);
if (ObjectHelper.isEqual(obj1, obj2)) {
    console.log("✅两个对象相等");
} else {
    console.log("❌两个对象不等");
}

const obj9 = Object.create(null, {
    name: { value: "ShanDong", enumerable: true },
    age: { value: 25, enumerable: true },
});
console.log(obj9); // {name: "ShanDong", age: 25}
