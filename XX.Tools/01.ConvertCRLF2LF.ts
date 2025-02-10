/**
 * @file   : 01.ConvertCRLF2LF.ts
 * @time   : 09:52
 * @date   : 2025/2/7
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export default {
    name: "01.Convert CRLF to LF",
    description: "转换 CRLF 换行符为 LF 换行符",
};

import fs from "fs";
import path from "path";

function convertLineEndings(filePath: string): void {
    try {
        // 读取文件内容
        const fileContent = fs.readFileSync(filePath, "utf8");
        // 替换 CRLF 为 LF
        const updatedContent = fileContent.replace(/\r\n/g, "\n");

        // 如果内容发生变化，写回文件
        if (fileContent !== updatedContent) {
            fs.writeFileSync(filePath, updatedContent, "utf8");
            console.log(`Converted: ${filePath}`);
        } else {
            console.log(`No changes needed: ${filePath}`);
        }
    } catch (error) {
        console.error(`Error processing file ${filePath}:`, error);
    }
}

function processDirectory(dirPath: string): void {
    try {
        const files = fs.readdirSync(dirPath);
        for (const file of files) {
            const filePath = path.join(dirPath, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
                // 如果是目录，递归处理
                processDirectory(filePath);
            } else if (file.endsWith(".ts") || file.endsWith(".js")) {
                // 如果是 .ts 或 .js 文件，处理换行符
                convertLineEndings(filePath);
            }
        }
    } catch (error) {
        console.error(`Error processing directory ${dirPath}:`, error);
    }
}

// 启动脚本
const targetDirectory = "../src"; // 替换为目标目录的路径
processDirectory(targetDirectory);
