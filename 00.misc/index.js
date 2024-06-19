"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
console.log("Hello,World!");
function getType(something) {
    return Object.prototype.toString.call(something).slice(8, -1);
}
console.log(getType(null)); // "Null"
console.log("qingdao".toString()); // "qingdao"
console.log(getType("qingdao")); // "String"
