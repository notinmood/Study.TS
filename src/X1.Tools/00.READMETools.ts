/**
 * @file   : 00.ExportToMD.ts
 * @time   : 10:14
 * @date   : 2025/2/7
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

/**
 * @name   : 导出目录到 Markdown
 * @desc   : 遍历指定目录下的所有 TypeScript 文件，提取 export default 块中的 name 或 title 和 description 或 describe，生成 Markdown 列表。
 * 其中，name 或 title 表示导出项的名称，description 或 describe 表示导出项的描述。这两项必须位于 export default 块的开头。
 * 即格式为：
 * export default {
 *     name: "导出项名称",
 *     description: "导出项描述"
 * }
 * 不符合此格式的 export default 块的文件将被忽略。
 * 输出的 Markdown 文件名为 00.README.md。
 */

import * as fs from "fs";
import * as path from "path";

// 定义一个接口来存储 name 或 title，以及 description 或 describe
interface ExportInfo {
    nameOrTitle: string;
    descriptionOrDescribe: string;
}

// 从 export default 块中提取 name 或 title 和 description 或 describe
function getExportInfo(content: string): ExportInfo | null {
    const regex =
        /export\s+default\s*\{[\s\S]*?(name|title):\s*["']([^"']*)["'],\s*(description|describe):\s*["']([^"']*)["']/;
    const match = content.match(regex);
    if (match && match.length >= 5) {
        const nameOrTitle = match[2];
        const descriptionOrDescribe = match[4];
        return {
            nameOrTitle,
            descriptionOrDescribe,
        };
    }
    return null;
}

// 遍历目录并处理文件
function processDirectory(dirPath: string): Array<{ filePath: string; exportInfo: ExportInfo }> {
    const result: Array<{ filePath: string; exportInfo: ExportInfo }> = [];
    const items = fs.readdirSync(dirPath);
    for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stat = fs.statSync(itemPath);
        if (stat.isDirectory()) {
            result.push(...processDirectory(itemPath));
        } else if (stat.isFile() && item.endsWith(".ts")) {
            const content = fs.readFileSync(itemPath, "utf8");
            const exportInfo = getExportInfo(content);
            if (exportInfo) {
                result.push({
                    filePath: path.relative(dirPath, itemPath),
                    exportInfo,
                });
            }
        }
    }
    return result;
}

// 生成 Markdown 列表
function generateMarkdown(items: Array<{ filePath: string; exportInfo: ExportInfo }>): string {
    return items
        .map((item) => {
            return `- [${item.exportInfo.nameOrTitle}](./${item.filePath}) - ${item.exportInfo.descriptionOrDescribe}`;
        })
        .join("\n");
}

// 主函数
async function main() {
    try {
        const dirPath = "./"; // 当前目录
        const items = processDirectory(dirPath);
        if (items.length > 0) {
            let markdownContent = generateMarkdown(items);
            const readmePath = path.join(dirPath, "00.README.md");
            markdownContent = `# 目录\n\n${markdownContent}`;
            fs.writeFileSync(readmePath, markdownContent, "utf8");
            console.log(`信息已写入 00.README.md 文件。`);
        } else {
            console.log("没有找到符合条件的文件。");
        }
    } catch (error) {
        console.error("处理过程中发生错误：", error);
    }
}

// 启动主函数
main();
