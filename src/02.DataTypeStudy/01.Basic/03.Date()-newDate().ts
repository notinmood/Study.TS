/**
 * @file   : 03.Date()-new-Date().ts
 * @time   : 16:38
 * @date   : 2025/2/15
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "03.Date()-new Date()辨析",
    description: "Date()与new Date()的区别",
};

/**
 * Date()与new Date()的区别
 * Date()是全局函数，可以直接调用，返回一个表示的日期和时间的字符串对象。
 * new Date()是构造函数，需要通过new关键字调用，返回一个Date对象。
 */

const dateA: string = Date();
const dateB: Date = new Date();

console.log(dateA); // 类似于：Sat Feb 15 2025 16:44:14 GMT+0800 (中国标准时间)
console.log(dateB); // 类似于：2025-02-15T08:44:14.118Z (虽然此处打印出来也是字符串，但实际上调用的是这个Date对象toString方法显示的结果。)

//因为dateB是Date对象，所以可以调用其各种方法获取日期和时间信息。
console.log(dateB.getFullYear()); // 2025
console.log(dateB.getMonth() + 1); // 2 (返回的月份是0-11，因此加1符合人们的习惯)
console.log(dateB.getDate()); // 15
console.log(dateB.getDay()); // 4 (0-6, 其中“0”代表星期日)
console.log(dateB.getHours()); // 8
console.log(dateB.getMinutes()); // 44
console.log(dateB.getSeconds()); // 14
console.log(dateB.getMilliseconds()); // 118
console.log(dateB.getTime()); // 1613390254118 (返回自1970年1月1日午夜（UTC）以来的毫秒数)
console.log(dateB.getTimezoneOffset()); // -480 (返回本地时间与UTC时间的时差，以分钟为单位)
console.log(dateB.getUTCHours()); // 16 (返回UTC时间的小时数)
console.log(dateB.toUTCString()); //Sat, 15 Feb 2025 09:02:05 GMT
console.log(dateB.toLocaleString()); //2025/2/15 17:02:05
console.log(dateB.toString()); //Sat Feb 15 2025 17:02:05 GMT+0800 (中国标准时间)

// 注意：Date()函数返回的字符串格式为"YYYY-MM-DDTHH:mm:ss.sssZ"，其中"T"表示日期和时间之间的分隔符，"Z"表示时区。

//更多不同的说明：

// 1. 调用方式不同
// Date()是全局函数，可以直接调用，返回一个表示的日期和时间的字符串对象。
// new Date()是构造函数，需要通过new关键字调用，返回一个Date对象。

// 2. 参数不同
// Date()函数没有参数，返回当前日期和时间的字符串。
// new Date()函数可以传入多个参数，包括年、月、日、时、分、秒、毫秒等，返回一个Date对象。

// 3. 返回值不同
// Date()函数返回的字符串格式为"YYYY-MM-DDTHH:mm:ss.sssZ"，其中"T"表示日期和时间之间的分隔符，"Z"表示时区。
// new Date()函数返回的Date对象，可以调用其各种方法获取日期和时间信息。

// 4. 性能不同
// Date()函数的性能较好，因为它直接返回字符串，不需要创建Date对象。
// new Date()函数的性能较差，因为它需要创建Date对象，并且需要解析传入的参数。

// 5. 应用场景不同
// Date()函数一般用于获取当前日期和时间，或者将日期和时间字符串转换为Date对象。
// new Date()函数一般用于创建Date对象，或者获取Date对象的方法。
