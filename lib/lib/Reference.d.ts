import { Collection } from "./Collection";
import { DatabaseProvider } from "./DatabaseProvider";
import { Document } from "./Document";
import { Query } from "./Query";
export declare class Reference {
    protected readonly provider: DatabaseProvider;
    path?: string | undefined;
    constructor(provider: DatabaseProvider, path?: string | undefined);
    child(path: string): Reference;
    orderByKey(): Query;
    orderByValue(): Query;
    orderByChild(child: string): Query;
    get(): Promise<Document>;
    list(toArray?: boolean): Promise<Collection | Document[]>;
}
//# sourceMappingURL=Reference.d.ts.map