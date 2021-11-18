import { Collection } from "./Collection";
import { DatabaseProvider } from "./DatabaseProvider";
import { Document } from "./Document";
import { Query } from "./Query";

export class Reference {
  public params: URLSearchParams = new URLSearchParams();

  constructor(
    private readonly database: DatabaseProvider,
    public readonly path: string
  ) {}

  child(path: string): Reference {
    return new Reference(this.database, [this.path, path].join("/"));
  }

  orderByKey(): Query {
    return new Query(this).orderBy('"$key"');
  }

  orderByValue(): Query {
    return new Query(this).orderBy("value");
  }

  orderByChild(child: string): Query {
    return new Query(this).orderBy(`"${child}"`);
  }

  list(): Promise<Collection> {
    return this.database.list(this);
  }

  get(): Promise<Document> {
    return this.database.get(this);
  }
}
