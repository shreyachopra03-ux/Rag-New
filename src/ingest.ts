import fs from "fs/promises";
// @ts-ignore
import pdf from "pdf-parse/lib/pdf-parse.js";

export async function extractText (filePath : string): Promise<string> {
    const bufferText = await fs.readFile(filePath);
    const result = await pdf(bufferText);
    return result.text;
};


