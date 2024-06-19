"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNameSpace = void 0;
var MyNameSpace;
(function (MyNameSpace) {
    var myData = {
        name: "qingdao",
        eat: function () {
        },
        /**
         * 因为类型 Human 内没有方法 do()，因此类型 partOfHuman 也不能有 do()。
         */
        // do(){},
    };
    console.log(myData); //{ name:'qingdao', eat:[Function: eat]}
})(MyNameSpace || (exports.MyNameSpace = MyNameSpace = {}));
