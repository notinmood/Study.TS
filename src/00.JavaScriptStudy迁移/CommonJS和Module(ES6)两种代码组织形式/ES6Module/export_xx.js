// 导出变量
export let myVar = 'myVar';

// 导出变量
export const myConst = 'myConst';

// 导出对象
export const myObject = { name: 'xx', age: 20 };

// 导出函数
export function myFunction() {
    return 'myFunction';
}

// 导出类
export class MyClass {
    constructor(name = 'xx') {
        this.name = name;
    }

    sayHello() {
        console.log('Hello, ' + this.name);
    }
}

// 导出重命名类
export { MyClass as myClass };

// 多个数据统一导出（大括号内不是对象的名值对成员，是用逗号分隔的待导出数据的名称列表）
export { myVar as myVar2, myConst as myConst2 }


