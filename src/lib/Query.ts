import { Reference } from "./Reference";

export class Query extends Reference {
  orderBy(key: string) {
    return this;
  }

  limitToLast(limit: number) {
    const queryRef = this.provider.limitToLast(limit);
    queryRef.path = this.path;
    return queryRef;
  }

  limitToFirst(limit: number) {
    const queryRef = this.provider.limitToLast(limit);
    queryRef.path = this.path;
    return queryRef;
  }
}
