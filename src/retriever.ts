import { embed } from './embedder.js';
import { VectorStore } from "./vectorStore.js";

export async function retrieve (query: string, store: VectorStore, topK = 4): Promise<string[]> {
    const [queryEmbedding]= await embed([query]);
    const res = store.search(queryEmbedding, topK);
    return res;
}