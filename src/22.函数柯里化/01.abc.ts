export default {
    name: "01.abc",
    description: "函数柯里化基础使用",
};

const original = function (a: number, b: number, c: number, d: number) {
    return a + b + c + d;
};

const curry = function (a: number) {
    return function (b: number) {
        return function (c: number) {
            return function (d: number) {
                return a + b + c + d;
            };
        };
    };
};

const c1 = curry(2);
const c2 = c1(3);
const c3 = c2(4);
const c4 = c3(5);

console.log(c3); //[Function (anonymous)]
console.log(c4); // 14

console.log(original(2, 3, 4, 5)); // 14
