import { Document } from "./Document";

export class Collection {
  constructor(private data: object | null) {}

  toArray(): Document[] {
    return Object.entries(this.data || {}).map(
      (entries) => new Document(...entries)
    );
  }
}
