export class Arrays {
  public static equal<T>(a: T[], b: T[]): boolean {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  public static uniq<T>(a: T[]): T[] {
    const seen: any = {};
    const out = [];
    let j = 0;
    for (const item of a) {
      if (seen[item] !== 1) {
        seen[item] = 1;
        out[j++] = item;
      }
    }

    return out;
  }

  public static chunk<T>(arr: T[], chunkSize: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  }

  public static variableChunk<T>(arr: T[], chunkSizes: number[]): T[][] {
    const chunks: T[][] = [];
    let chunkSizeIndex = 0;

    for (let i = 0; i < arr.length; ) {
      const chunkSize = chunkSizes[chunkSizeIndex] || arr.length - i;
      chunks.push(arr.slice(i, i + chunkSize));
      i += chunkSize;

      if (chunkSizeIndex < chunkSizes.length - 1) {
        chunkSizeIndex++;
      }
    }

    return chunks;
  }
}
