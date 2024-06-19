"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Worker_1 = require("../00.res/Worker");
var Student_1 = require("../00.res/Student");
var w = new Worker_1.Worker("zhangsan", "IT Engineer");
var h = w;
console.log(h); // Worker { name:'zhangsan', workType:'IT Engineer'}
var s = h;
console.log(s); // Worker { name:'zhangsan', workType:'IT Engineer'}
var t = typeof s;
console.log(t);
if (s instanceof Student_1.Student) {
    console.log("YY 是Student的实例！");
}
else {
    console.log("NN 不是Student的实例！");
}
// +--------------------------------------------------------------------------
// |::说明·| 通过本示例我们可以发现使用类型断言，只是可以改变对象在IDE里面的智能感知情形，
// |::一一·| 不会改变对象在内存里面真实的存在和所属类型。（本例中对象始终为 Worker{...}）
// +--------------------------------------------------------------------------
