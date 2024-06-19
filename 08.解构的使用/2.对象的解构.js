/**
 * @file   : 2.对象的解构.ts
 * @time   : 10:53
 * @date   : 2022/4/19
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
// @ts-ignore
var a = o.a, b = o.b; //从o中解构出a,b
console.log(a);
console.log(b);
// @ts-ignore
var a = o.a, rest2 = __rest(o, ["a"]);
console.log(a);
console.log(rest2);
