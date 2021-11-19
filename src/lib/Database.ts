import { DatabaseProvider } from "./DatabaseProvider";
import { Reference } from "./Reference";

export class Database {
  constructor(private readonly provider: DatabaseProvider) {}

  ref(path: string): Reference {
    return this.provider.ref(path);
  }
}
