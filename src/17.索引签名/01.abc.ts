/**
 * @file   : 01.abc.ts
 * @time   : 17:16
 * @date   : 2025/1/16
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

//使用索引签名`{ [key: string]: string }`来定义一个key和value都是string的字面量对象
const languages: { [key: string]: string } = {
    en: "English",
    fr: "French",
    es: "Spanish",
    // 你可以在不改变类型的情况下添加更多的语言
};

// 添加新语言到字典
languages.de = "German";

// 检索语言名称
console.log(languages.en); // 输出: "English"
console.log(languages.de); // 输出: "German"
