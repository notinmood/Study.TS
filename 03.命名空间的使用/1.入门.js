"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("../00.res/Employee");
var Employee = Employee_1.TSS._res.Employee;
var e = new Employee("zhangsan", 20);
var age = e.getAge();
console.log(age);
