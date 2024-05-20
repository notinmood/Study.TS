export default {};

let parent = {
    name: "parent",
    age: 20,
    sayHello: function () {
        console.log("Hello, I am " + this.name);
    },
};

// // 实例继承实例,方式1
// let child = Object.create(parent);

// 实例继承实例,方式2
let child = Object.create(null);
Object.setPrototypeOf(child, parent);

child.name = "child";
child.age = 25;

child.sayHello(); // Hello, I am child
