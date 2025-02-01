import {Bar} from "basiclibrary.ts/dist/bar.js"
import {StringHelper} from "basiclibrary.ts/dist/data/stringhelper.js"


let result = Bar.sm1("Hello")
console.log(result);

let str = "Hello World";
str = StringHelper.getStringBeforeSeparator(str, " ");
console.log(str)

