"use strict";
// +--------------------------------------------------------------------------
// |::说明·| 通过命名空间创建类型的例子。
// |::一一·|  命名空间和命名空间内的标的信息（比如本例的类型 Employee）都要export，否则Client代码找不到这些信息。
// +--------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.TSS = void 0;
// eslint-disable-next-line @typescript-eslint/no-namespace
var TSS;
(function (TSS) {
    var _res;
    (function (_res) {
        var Employee = /** @class */ (function () {
            function Employee(name, age) {
                this.name = name;
                this.age = age;
            }
            /**
             * 获取学生的姓名
             * @returns
             */
            Employee.prototype.getName = function () {
                return this.name;
            };
            Employee.prototype.getAge = function () {
                return this.age;
            };
            /**
             * 讲话
             * @returns
             */
            Employee.talk = function () {
                return "hello,我是一个学生！";
            };
            return Employee;
        }());
        _res.Employee = Employee;
    })(_res = TSS._res || (TSS._res = {}));
})(TSS || (exports.TSS = TSS = {}));
