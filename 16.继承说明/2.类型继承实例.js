export default {
    //only separate the code as namespace
}

let laoZhang = {
    name: '老张',
    age: 25,
    sayHello: function () {
        console.log('你好，我是' + this.name);
    }
}


function Zhang(name, age) {
    this.name = name;
    this.age = age;
}

// 使用 Object.setPrototypeOf()或者 Zhang.prototype属性来实现继承：
// Zhang.prototype = laoZhang;
Object.setPrototypeOf(Zhang.prototype, laoZhang)

let zhang = new Zhang('张三', 20);
zhang.sayHello(); // 你好，我是张三
