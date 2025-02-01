const bl = require("basiclibrary.ts/lib/index");

let result = "";
result = bl.StringHelper.getStringBeforeSeparator("i am a Chinese!", "Chi");
console.log(result);

result = bl.StringHelper.getStringBeforeSeparator("i am a Chinese!", "chi");
console.log(result);