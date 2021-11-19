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

  get() {
    return this.provider.get(this);
  }

  list(toArray = false) {
    return this.provider.list(this, toArray);
  }
}
