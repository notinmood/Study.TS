export default {};

console.log("Hello,World!");

function getType(something: unknown): string {
    return Object.prototype.toString.call(something).slice(8, -1);
}

console.log(getType(null)); // "Null"
console.log("qingdao".toString()); // "qingdao"
console.log(getType("qingdao")); // "String"
