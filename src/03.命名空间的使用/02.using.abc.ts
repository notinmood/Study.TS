export default {
    name: "02.命名空间的使用",
    description: "通过别名导入命名空间",
};
//导入命名空间
import * as myNS from "../00.res/Employee";
//创建对象
const emp = new myNS.TSS._res.Employee("John Doe", 30);
//调用方法
console.log(emp.getAge()); // 30000
