/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2024/6/19 09:28:49
 * @FilePath     : map的使用.ts
 * @Description  :
 * Copyright (c) 2024 by Hiland & RainyTop, All Rights Reserved.
 */
export {};

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

const formatNumber = (n: number) => {
    const s = n.toString();
    return s[1] ? s : "0" + s;
};

const formatTime =
    [year, month, day].map(formatNumber).join("/") + " " + [hour, minute, second].map(formatNumber).join(":");

console.log(formatTime);
