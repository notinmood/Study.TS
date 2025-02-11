// export default {
//     name: "javascriptTime",
//     description: "JavaScript时代的继承方式",
// };

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function () {
    console.log(this.name);
};

function Student(name, age, grade) {
    Person.call(this, name, age);
    this.grade = grade;
}

// 设置原型链的方式1（推荐）
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

//// 设置原型链的方式2（现在不推荐）
// Student.prototype = new Person();
// Student.prototype.constructor = Student;

/**
 * 以上两种方式都可以，推荐使用方式1，因为方式2需要实例化一个Person对象，会初始化很多不必要的属性，影响性能。
 * 以上两种方式，都需要对原型链上的构造函数进行重新赋值（即修复constructor指向错误），否则会出现构造函数指向错误的问题。
 */
console.log(Student.prototype.constructor.toString());

/**
 * 如果未对原型链上的构造函数进行重新赋值，打印结果为：
 * function Person(name, age) {
 *     this.name = name;
 *     this.age = age;
 * }
 * 而修复后正确的结果是：
 * function Student(name, age, grade) {
 *     Person.call(this, name, age);
 *     this.grade = grade;
 * }
 */

let tom = new Student("Tom", 18, 3);
tom.sayName();
console.log(tom);
