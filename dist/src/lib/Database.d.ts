import { DatabaseProvider } from "./DatabaseProvider";
import { Reference } from "./Reference";
export declare class Database {
    protected readonly provider: DatabaseProvider;
    constructor(provider: DatabaseProvider);
    ref(path: string): Reference;
}
//# sourceMappingURL=Database.d.ts.map