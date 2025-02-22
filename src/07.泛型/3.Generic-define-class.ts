/**
 * @file   : 2.泛型函数.ts
 * @time   : 20:29
 * @date   : 2022/4/20
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "3.泛型类型的定义方式",
    description: "泛型类型定义方式",
};

// 泛型类型定义方式
// 1. 定义时，在类型名后面添加尖括号，并在尖括号中指定泛型类型参数
// 2. 调用时，在类型参数前面指定类型参数（也可以不指定，因为TypeScript会根据传入参数的类型自动推断出类型参数），并在类型参数后面传入具体类型参数
// 3. 泛型类型参数可以是任意类型，包括基本类型、接口类型、类类型等
// 4. 泛型类型参数可以是类型变量，也可以是接口类型变量，也可以是类类型变量
// 5. 泛型类型参数可以是函数类型参数，也可以是函数返回值类型参数
// 6. 泛型类型参数可以是数组类型参数，也可以是元组类型参数
// 7. 泛型类型参数可以是泛型约束，也可以是泛型条件类型
// 8. 泛型类型参数可以是类型别名，也可以是接口类型别名，也可以是类类型别名
// 9. 泛型类型参数可以是类型参数的子类型，也可以是类型参数的超类型

//在类型上声明泛型类型参数
// 1. 定义时，在类型名后面添加尖括号，并在尖括号中指定泛型类型参数
// 2. 调用时，在类型参数前面指定类型参数，并在类型参数后面传入具体类型参数
// 3. 泛型类型参数可以是任意类型，包括基本类型、接口类型、类类型等
class MyClass<T> {
    constructor(
        public name: string,
        public data: T,
    ) {
        this.name = name;
        this.data = data;
    }

    //因为T已经在类型上声明了，所以在构造函数中可以直接使用T类型参数
    getData(): T {
        return this.data;
    }

    doSomething(callback: (data: T) => void) {
        callback(this.data);
    }

    // 如果类的成员使用了类中没有声明的泛型类型参数，则需要在成员函数中声明类型参数
    bar<U>(u: U, t: T): U {
        this.data = t;
        return u;
    }
}

const myClassInt = new MyClass<number>("myClass", 123); // 调用时，明确指定类型参数
console.log(myClassInt.getData()); // 123

const myClassString = new MyClass("myClass", "zhangsan"); // 调用时，可以不明确指定类型参数，因为类型参数可以通过参数的类型推断出来
console.log(myClassString.getData()); // zhangsan

console.log(myClassString.bar<string>("hello", "world")); // hello // 调用时，明确指定类型参数
console.log(myClassString.bar(true, "world")); // true // 调用时，可以不明确指定类型参数，因为类型参数可以通过参数的类型推断出来
