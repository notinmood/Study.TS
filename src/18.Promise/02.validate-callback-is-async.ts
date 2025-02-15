export default {
    name: "02.validate-callback-is-async",
    description: "验证then内的回调方法是异步方法",
};

const promise = new Promise(function (resolve) {
    console.log("before resolved");
    resolve("resolved");
    console.log("after resolved");
});

promise.then(function (someValue) {
    console.log(someValue);
});

console.log("outer");

// 以上代码执行的结果如下
// before resolved
// after resolved
// outer
// resolved
