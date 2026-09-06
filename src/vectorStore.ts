interface StoredChunk {
    text: string, 
    embedding: number[]
}

export class VectorStore {
    private data: StoredChunk[] = [];

    add(chunks: string[], embeddings: number[][]) {
        chunks.forEach((text, i) => this.data.push({ text, embedding: embeddings[i] }));
    }

    private cosineSim(a: number[], b: number[]): number {
        let dot = 0, normA = 0, normB = 0;
        for (let i = 0; i < a.length; i++) {
            dot += a[i] * b[i];
            normA += a[i] * a[i];
            normB += b[i] * b[i];
        }
        return dot / (Math.sqrt(normA) * Math.sqrt(normB));
    }

    search(queryEmbedding: number[], topk = 4): string[] {
        return this.data
            .map(d => ({ text: d.text, score: this.cosineSim(queryEmbedding, d.embedding) }))
            .sort((a, b) => b.score - a.score)
            .slice(0, topk)
            .map(d => d.text);
    }
}