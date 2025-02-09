/**
 * @file   : 1.ts
 * @time   : 11:07
 * @date   : 2025/2/7
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

/**
 * 这是一个为文件目录生成当前目录下所有 TypeScript 文件说明的脚本。
 * 它会遍历指定目录下的所有 TypeScript 文件，提取出 export default 块中的 name 或 title 和 description 或 describe，并生成一个 Markdown 列表。
 * 脚本会递归处理子目录。
 * 本脚本可以在任何时候手工执行。
 */

import * as fs from "fs";
import * as path from "path";

// 定义一个接口来存储 name 或 title，以及 description 或 describe
interface ExportInfo {
    nameOrTitle: string;
    descriptionOrDescribe?: string; // 使用可选属性
}

// 从 export default 块中提取 name 或 title 和 description 或 describe
function getExportInfo(content: string): ExportInfo | null {
    const regex = /export\s+default\s*\{[\s\S]*?(name|title):\s*["']([^"']*)["']/;
    const match = content.match(regex);
    if (match && match.length >= 3) {
        const nameOrTitle = match[2];

        // 匹配 description 或 describe
        const descriptionMatch = content.match(/(description|describe):\s*["']([^"']*)["']/);

        const descriptionOrDescribe = descriptionMatch?.[2] || "(未提供描述)";

        return {
            nameOrTitle,
            descriptionOrDescribe,
        };
    }
    return null;
}

// 遍历目录并处理文件，生成 00.ItemList.md
function processDirectory(dirPath: string): void {
    const items: Array<{ filePath: string; exportInfo: ExportInfo }> = [];
    const subDirectories: string[] = [];

    const dirItems = fs.readdirSync(dirPath);
    for (const item of dirItems) {
        const itemPath = path.join(dirPath, item);
        const stat = fs.statSync(itemPath);

        if (stat.isDirectory()) {
            // 递归处理子目录
            processDirectory(itemPath);
            subDirectories.push(itemPath);
        } else if (stat.isFile() && item.endsWith(".ts")) {
            const content = fs.readFileSync(itemPath, "utf8");
            const exportInfo = getExportInfo(content);
            if (exportInfo) {
                items.push({
                    filePath: path.relative(dirPath, itemPath),
                    exportInfo,
                });
            }
        }
    }

    // 生成 Markdown 列表
    if (items.length > 0) {
        let markdownContent = items
            .map((item) => {
                return `- [${item.exportInfo.nameOrTitle}](${item.filePath}) - ${item.exportInfo.descriptionOrDescribe}`;
            })
            .join("\n");

        // 写入到 00.ItemList.md
        const outFilePath = path.join(dirPath, "00.ITEMLIST.md");
        markdownContent = `# 目录\n\n${markdownContent}`;
        fs.writeFileSync(outFilePath, markdownContent, "utf8");
        console.log(`已生成 ${outFilePath}`);
    }

    // 处理子目录
    for (const subDir of subDirectories) {
        processDirectory(subDir);
    }
}

// 主函数
async function main(targetDir: string) {
    try {
        // 确保目标目录存在
        if (!fs.existsSync(targetDir)) {
            throw new Error(`目录 ${targetDir} 不存在，请检查路径。`);
        }

        console.log(`》》》正在处理目录：${targetDir}`);
        processDirectory(targetDir);
        console.log("》》》处理完成。");
    } catch (error) {
        console.error("处理过程中发生错误：", error);
    }
}

// 启动主函数，传入目标目录
const targetDirectory = "D:\\HOME\\MySpace\\Study.TS\\src";
main(targetDirectory).then(() => {
    console.log("处理完成时间：", new Date().toLocaleString());
});
