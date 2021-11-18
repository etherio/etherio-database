import { DatabaseProvider } from "./DatabaseProvider";
import { Reference } from "./Reference";

export class Database {
  constructor(protected readonly provider: DatabaseProvider) {}

  ref(path: string): Reference {
    return new Reference(this.provider, path);
  }
}
