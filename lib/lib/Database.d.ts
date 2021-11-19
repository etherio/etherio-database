import { DatabaseProvider } from "./DatabaseProvider";
import { Reference } from "./Reference";
export declare class Database {
    private readonly provider;
    constructor(provider: DatabaseProvider);
    ref(path: string): Reference;
}
//# sourceMappingURL=Database.d.ts.map