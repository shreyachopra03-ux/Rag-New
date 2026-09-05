export function chunkText (text: string, chunkSize: number, overlap: number): string[] {
    const words = text.split(/\s+/);
    const chunks: string[] = [];
    let start = 0;

   while (start < words.length) {
    const chunkWords = words.slice(start, start + chunkSize);
    chunks.push(chunkWords.join(""));
    start += chunkSize - overlap;
   }
   return chunks;
};