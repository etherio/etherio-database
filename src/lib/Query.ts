import axios from "axios";
import { Collection } from "./Collection";
import { Document } from "./Document";
import { Reference } from "./Reference";

export class Query {
  public readonly params: URLSearchParams;

  constructor(private readonly ref: Reference) {
    this.params = ref.params;
  }

  orderBy(key: string) {
    this.params.append("orderBy", key);
    return this;
  }

  limitToLast(limit: number) {
    this.params.append("limitToLast", limit.toString());
    return this;
  }

  limitToFirst(limit: number) {
    this.params.append("limitToFirst", limit.toString());
    return this;
  }

  list(): Promise<Collection> {
    return this.ref.list();
  }

  get(): Promise<Document> {
    return this.ref.get();
  }
}
