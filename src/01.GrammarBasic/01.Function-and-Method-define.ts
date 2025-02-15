/**
 * @file   : 01.Function-and-Method-using.ts
 * @time   : 13:33
 * @date   : 2025/2/15
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "01.函数和方法的定义和使用",
    description: "在TypeScript中，我们可以定义函数和方法的各种方式！",
};

/**
 * 说明1：函数和方法名称上的辨析：
 * 通常情况下，我们说函数和方法没有本质的区别，只是一个定义在类型外，另一个定义在类型内：
 * 1. 函数定义：使用function关键字定义函数，并在函数名后面添加参数类型和返回值类型。
 * 2. 方法定义：使用class关键字定义类，并在类中定义方法，方法名后面添加参数类型和返回值类型。
 */

/**
 * 说明2：函数和方法的定义可以有多种方式，包括：
 *   1. 函数标准定义方式：使用function关键字；方法标准定义方式：不使用function关键字。
 *   2. 匿名函数和匿名方法，没有名字；但为了后续使用，所以要将他们赋值给变量（变量的类型是函数类型）。
 *   3. 箭头函数和箭头方法，没有名字；但为了后续使用，所以要将他们赋值给变量（变量的类型是函数类型）；箭头函数和箭头方法的签名和函数体之间使用=>符号隔开。
 */

/**
 * 说明3：匿名函数、箭头函数、lambda表达式的辨析：
 * 1. 普通匿名函数和箭头函数都是没有名字，他们都叫做匿名函数，为了后续使用，所以要将他们赋值给某个变量。
 * 2. 箭头函数：是lambda表达式的一种形式，语法更简洁。（只是TypeScript中，很少提及lambda表达式这个概念）
 */

// 1. 函数定义（1.1. 函数标准定义方式）
function addStandard(x: number, y: number): number {
    return x + y;
}

// 1. 函数定义（1.2. 匿名函数定义方式）
const addAnonymous = function (x: number, y: number): number {
    return x + y;
};

// 1. 函数定义（1.3. 箭头函数定义方式）
const addArrow = (x: number, y: number): number => {
    return x + y;
};

console.log(addStandard(1, 2));
console.log(addAnonymous(2, 3));
console.log(addArrow(3, 4));

//──函数和方法的分割线──────────────────────────────────

class Calculator {
    // 2. 方法定义(2.1. 方法标准定义方式)
    static add(x: number, y: number): number {
        return x + y;
    }

    // 2. 方法定义(2.2. 匿名方法定义方式)
    static addAnonymous = function (x: number, y: number): number {
        return x + y;
    };

    // 2. 方法定义(2.3. 箭头方法定义方式)
    static addArrow = (x: number, y: number): number => {
        return x + y;
    };
}

console.log(Calculator.add(1, 2));
console.log(Calculator.addAnonymous(2, 3));
console.log(Calculator.addArrow(3, 4));
