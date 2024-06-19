"use strict";
/**
 * @file   : 6.2.keyof应用.ts
 * @time   : 10:25
 * @date   : 2022/4/27
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNameSpace = void 0;
// TODO:xiedali@2022/4/27 未完成
var MyNameSpace;
(function (MyNameSpace) {
    var Service = /** @class */ (function () {
        function Service(person) {
            this.person = person;
        }
        // TODO:xiedali@2022/4/27 需要根据传入的参数，对返回值类型进行处理
        Service.prototype.getPersonData = function (fieldName) {
            return this.person[fieldName];
        };
        return Service;
    }());
    var zhangsan = {
        name: "zhangsan",
        age: 20,
        gender: true,
    };
    var service = new Service(zhangsan);
    var targetValue;
    targetValue = service.getPersonData("name");
    console.log(targetValue);
    // // 以下代码在编译期就会出现错误，从而保证了代码的质量。
    // targetValue = service.getPersonData2("city");
    // console.log(targetValue);
})(MyNameSpace || (exports.MyNameSpace = MyNameSpace = {}));
