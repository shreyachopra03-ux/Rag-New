import "dotenv/config";

export async function embed (chunks: string[]): Promise<number[][]> {
    const res = await fetch('https://api.jina.ai/v1/embeddings', {
        method: "POST",
        headers: {
        Authorization: `Bearer ${process.env.JINA_API_KEY}`,
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'jina-embeddings-v3',
            input: chunks,
        }), 
    });
        const data = await res.json();
        return data.data.map((item: { embedding: number[] }) => item.embedding);
}