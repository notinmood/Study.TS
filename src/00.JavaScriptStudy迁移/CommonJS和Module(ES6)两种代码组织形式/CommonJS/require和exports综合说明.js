module.exports = {
    name: 'zhangsan',
    age: 20
}

function doSomething() {
    return "something";
}


console.log(module.exports);

console.log("//────typeof module─────");
console.log(typeof module); // object
console.log("//────module─────");
console.log(module);

console.log("//────module.require─────────────────────────────────");
console.log(module.require);

console.log("//────require─────");
console.log(require);


