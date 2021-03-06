import { Collection } from "./Collection";
import { DatabaseProvider } from "./DatabaseProvider";
import { Document } from "./Document";
import { Query } from "./Query";

export class Reference {
  constructor(
    protected readonly provider: DatabaseProvider,
    public path?: string
  ) {}

  child(path: string): Reference {
    return new Reference(this.provider, [this.path, path].join("/"));
  }

  orderByKey(): Query {
    const queryRef = this.provider.orderByKey();
    queryRef.path = this.path;
    return queryRef;
  }

  orderByValue(): Query {
    const queryRef = this.provider.orderByValue();
    queryRef.path = this.path;
    return queryRef;
  }

  orderByChild(child: string): Query {
    const queryRef = this.provider.orderByChild(child);
    queryRef.path = this.path;
    return queryRef;
  }

  equalTo(value: string): Query {
    const queryRef = this.provider.equalTo(value);
    queryRef.path = this.path;
    return queryRef;
  }

  startAt(value: string): Query {
    const queryRef = this.provider.startAt(value);
    queryRef.path = this.path;
    return queryRef;
  }

  endAt(value: string): Query {
    const queryRef = this.provider.endAt(value);
    queryRef.path = this.path;
    return queryRef;
  }

  get() {
    return this.provider.get(this);
  }

  list() {
    return this.provider.list(this);
  }
}
