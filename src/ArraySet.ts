export class ArraySet<T> {
  private items: T[] = [];
  private itemsHash: string[] = [];

  public add(value: T): boolean {
    if (!this.has(value)) {
      this.items.push(value);
      this.itemsHash.push(this.getHash(value));
      return true;
    }
    return false;
  }

  public first(): T {
    return this.items[0];
  }

  public shift(): T {
    this.itemsHash.shift();
    return this.items.shift();
  }

  public empty(): boolean {
    return this.items.length === 0;
  }

  public delete(value: T): boolean {
    const index = this.itemsHash.indexOf(this.getHash(value));
    if (index > -1) {
      this.items.splice(index, 1);
      this.itemsHash.splice(index, 1);
      return true;
    }
    return false;
  }

  public has(value: T): boolean {
    return this.itemsHash.indexOf(this.getHash(value)) > -1;
  }

  public clear(): void {
    this.itemsHash.length = 0;
    this.items.length = 0;
  }

  public size(): number {
    return this.items.length;
  }

  public values(): T[] {
    return Object.values(this.items);
  }

  private getHash(value: T): string {
    return typeof value + JSON.stringify(value);
  }
}
