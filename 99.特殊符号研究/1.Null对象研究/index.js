export default {
    name: "Null对象研究",
    path: "/99.特殊符号研究/1.Null对象研究/",
};

let nullObj = null;
console.log(nullObj); // null

let emptyObj = Object.create(null);
console.log(emptyObj); // {}
