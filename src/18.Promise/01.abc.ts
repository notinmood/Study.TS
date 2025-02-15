export default {
    name: "01.abc",
    description: "Promise的基本用法",
};

// 1. 创建一个Promise实例
const promise = new Promise((resolve: (value: string) => void, reject: (reason?: string) => void) => {
    const rand = Math.random();
    console.log("随机数是" + rand);
    if (rand > 0.5) {
        resolve("ok-" + rand);
    } else {
        reject("bad-" + rand);
    }
});

// 2. 调用Promise实例的then方法，传入两个参数，分别是成功和失败的回调函数
// 这两个回调函数将被Promise框架自动调用，并为其传递参数值。本地要操作的是接收到参数值之后的处理逻辑。
promise.then(
    function (success_info) {
        console.log("YYY我是系统resolve函数调用的自定义函数");
        console.log("YYY我接收到传递进来的参数为: " + success_info);
    },
    function (failure_info) {
        console.log("NNN我是系统reject函数调用的自定义函数");
        console.log("NNN我接收到传递进来的参数为: " + failure_info);
    },
);
