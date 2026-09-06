import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateAnswer(query: string, context: string[]): Promise<string> {
    const prompt = `Answer using ONLY the context below.
If the answer isn't there, say you don't know.

Context:
${context.join("\n\n")}

Question: ${query}`;

    const result = await ai.interactions.create({
        model: "gemini-3.6-flash",
        input: prompt,
    });
    return result.output_text ?? "Sorry, I couldn't generate an answer.";
}