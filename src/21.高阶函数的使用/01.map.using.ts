/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2024/6/19 09:28:49
 * @FilePath     : map的使用.ts
 * @Description  :
 * Copyright (c) 2024 by Hiland & RainyTop, All Rights Reserved.
 */
export default {
    name: "map的使用的示例",
    description: "map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。",
};

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

const formatNumber = (n: number): string => {
    const s = n.toString();
    return s[1] ? s : "0" + s;
};

const formatTime =
    [year, month, day].map(formatNumber).join("/") + " " + [hour, minute, second].map(formatNumber).join(":");

console.log(formatTime);
