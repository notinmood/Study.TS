export default {
    name: "01.命名空间的使用",
    description: "命名空间的导入和使用",
};

//只能导入顶层命名空间
import { TSS } from "../00.res/Employee";
//然后再导入命名空间下的类
import Employee = TSS._res.Employee;

const e = new Employee("zhangsan", 20);
const age = e.getAge();
console.log(age);
