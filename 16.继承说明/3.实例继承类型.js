export default {};

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

let zhangsan = new Person("zhangsan", 20);
zhangsan.sayHello(); // Hello, my name is zhangsan, I am 20 years old.
