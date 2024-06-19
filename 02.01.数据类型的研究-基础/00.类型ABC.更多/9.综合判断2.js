"use strict";
/**
 * @file   : 9.综合判断2.ts
 * @time   : 18:23
 * @date   : 2022/5/3
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNameSpace = void 0;
var MyNameSpace;
(function (MyNameSpace) {
    // ==0. 类型准备==
    var A = /** @class */ (function () {
        function A() {
        }
        return A;
    }());
    var AChild = /** @class */ (function (_super) {
        __extends(AChild, _super);
        function AChild() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AChild.prototype.SpecialLog = function () {
            console.log("specialLog");
        };
        return AChild;
    }(A));
    var B = /** @class */ (function () {
        function B() {
        }
        return B;
    }());
    console.log("1 基本类型判断------string、number、object、null、undefined------->");
    var str = "hello";
    var b1;
    var b2 = 3;
    var c1;
    var c2 = 6;
    var c3 = "6";
    var d1;
    var d2 = [1, 2, 3, 4];
    var e = null;
    console.log(typeof str === 'string'); //true
    console.log(typeof str === 'number'); //false
    console.log(typeof b2); //number
    console.log(typeof c1); //undefined
    console.log(typeof c2); //number
    console.log(typeof c3); //string
    //未赋值无法获取到类型
    // console.log(typeof d1)
    console.log(typeof d2); //object
    console.log(typeof e); //object
    console.log("2  引用类型判断-------接口或类类型,Array和RegExp------->");
    var a = new A();
    var aChild = new AChild();
    a = aChild;
    console.log(a instanceof A); //true
    console.log(aChild instanceof A); //true
    console.log(a instanceof B); //false
    if (a instanceof AChild) { //instanceof的类型转换功能
        console.log("a是AChild的实例");
        a.SpecialLog(); //specialLog
    }
    else {
        console.log("NN,a不是AChild的实例");
    }
    console.log([] instanceof Array); //true
    console.log({} instanceof Object); //true
    console.log(/\d/ instanceof RegExp); //true
    console.log("3 断言-----------即as和<>的用法------>");
    var p1 = 2345;
    var p2 = 643;
    var p3 = "643";
    // console.log("p1.length:"+p1.length+",p2.length:"+p2.length);//编译器直接报错
    // console.log("p1.length:" + (p1 as String).length + ",p2.length:" + (p2 as String).length);//因为p1确定是number类型，这里强转报错
    console.log("p2.length:" + p2.length);
    console.log("p2.length:" + p2.length);
    console.log("p3.length:" + p3.length);
    console.log("p3.length:" + p3.length);
    console.log("1:" + a);
    console.log("2:" + a);
    var _name = a.SpecialLog(); //specialLog
    console.log("3:" + _name); //undefined //因为函数 SpecialLog()没有返回值
    console.log("4:" + a.SpecialLog()); //specialLog 和 undefined
    console.log("-------->end");
})(MyNameSpace || (exports.MyNameSpace = MyNameSpace = {}));
