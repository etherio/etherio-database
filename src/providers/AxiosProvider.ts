import axios from "axios";
import { Collection } from "../lib/Collection";
import { Document } from "../lib/Document";
import { DatabaseProvider, Query, Reference } from "../main";

export class AxiosProvider implements DatabaseProvider {
  constructor(
    private readonly databaseUrl: string,
    private readonly secret: string
  ) {}

  get(ref: Reference): Promise<Document> {
    ref.params.append("auth", this.secret);
    let url = `${this.databaseUrl}/${ref.path}.json?${ref.params.toString()}`;
    return axios.get(url).then(({ data }) => new Document(data));
  }

  list(ref: Reference): Promise<Collection> {
    ref.params.append("auth", this.secret);
    let url = `${this.databaseUrl}/${ref.path}.json?${ref.params.toString()}`;
    return axios.get(url).then(({ data }) => new Collection(data));
  }
}
