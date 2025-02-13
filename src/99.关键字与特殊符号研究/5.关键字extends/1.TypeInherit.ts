/**
 * @file   : 1.TypeInherit.ts
 * @time   : 15:20
 * @date   : 2025/2/13
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "1.extends用于类型继承",
    description: "extends关键字用于类型继承，它可以让一个类继承另一个类的属性和方法。",
};
// 1.extends用于类型继承
// 2.extends关键字用于类型继承，它可以让一个类继承另一个类的属性和方法。
// 3.语法：
// class ChildClass extends ParentClass {    // 继承父类
//     // 子类独有属性和方法
// }
// 4.注意事项：
// 1）extends关键字只能用于类，不能用于接口。
// 2）子类只能继承父类的公有属性和方法，不能继承私有属性和方法。
// 3）子类可以重写父类的方法，但不能重写父类私有的方法。
// 5.示例：

class Animal {
    constructor(public name: string) {}

    move(distance: number) {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} barked.`);
    }
}

const myDog = new Dog("Rufus");
myDog.move(30); // output: Rufus moved 30 meters.
myDog.bark(); // output: Rufus barked.

// 6.总结：
// 1.extends关键字用于类型继承，它可以让一个类继承另一个类的属性和方法。
// 2.注意事项：
// 1）extends关键字只能用于类，不能用于接口。
// 2）子类只能继承父类的公有属性和方法，不能继承私有属性和方法。
// 3）子类可以重写父类的方法，但不能重写父类私有的方法。
