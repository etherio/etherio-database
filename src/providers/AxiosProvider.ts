import axios from "axios";
import { Collection } from "../lib/Collection";
import { Document } from "../lib/Document";
import { DatabaseProvider, Query, Reference } from "../main";

export class AxiosProvider implements DatabaseProvider {
  private readonly params = new URLSearchParams();

  constructor(private readonly databaseUrl: string, secret: string) {
    this.params.append("auth", secret);
  }

  ref(path: string): Reference {
    return new Reference(this, path);
  }

  orderByKey(): Query {
    this.params.append("orderBy", '"$key"');
    return new Query(this);
  }

  orderByValue(): Query {
    this.params.append("orderBy", '"$value"');
    return new Query(this);
  }

  orderByChild(child: string): Query {
    this.params.append("orderBy", '"' + child + '"');
    return new Query(this);
  }

  limitToFirst(limit: number): Query {
    this.params.append("limitToFirst", limit.toString());
    return new Query(this);
  }

  limitToLast(limit: number): Query {
    this.params.append("limitToLast", limit.toString());
    return new Query(this);
  }

  equalTo(value: string): Query {
    this.params.append("equalTo", value);
    return new Query(this);
  }

  startAt(value: string): Query {
    this.params.append("startAt", value);
    return new Query(this);
  }

  endAt(value: string): Query {
    this.params.append("endAt", value);
    return new Query(this);
  }

  get(ref: Reference): Promise<Document> {
    let url = `${this.databaseUrl}/${ref.path}.json?${this.params.toString()}`;
    return axios.get(url).then(({ data }) => new Document(data));
  }

  list(ref: Reference, toArray: boolean): Promise<Collection | Document[]> {
    let url = `${this.databaseUrl}/${ref.path}.json?${this.params.toString()}`;
    return axios
      .get(url)
      .then(({ data }) =>
        toArray ? new Collection(data).toArray() : new Collection(data)
      );
  }
}
