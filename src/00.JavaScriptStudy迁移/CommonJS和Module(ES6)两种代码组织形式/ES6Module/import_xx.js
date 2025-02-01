import { myObject, myFunction, myVar, myVar2, myConst,myConst2, MyClass, myClass } from './export_xx.js';

// 导入模块后，可以直接使用模块导出的变量、函数、类等。
console.log('导入的变量信息为：');
console.log(myVar);
console.log('──────────────────');

console.log('导入的变量信息为：');
console.log(myVar2);
console.log('──────────────────');

console.log('导入的常量信息为：');
console.log(myConst);
console.log('──────────────────');

console.log('导入的对象信息为：');
console.log(myObject);
console.log('──────────────────');

console.log('导入的函数信息为：');
console.log(myFunction);
console.log(myFunction());
console.log('──────────────────');

console.log('导入的类信息为：');
const myInstance = new MyClass("John");
console.log(MyClass);
myInstance.sayHello();
console.log('──────────────────');

console.log('导入的类信息为：');
const myClassInstance = new myClass("John");
console.log(myClass);
myClassInstance.sayHello();
console.log('──────────────────');