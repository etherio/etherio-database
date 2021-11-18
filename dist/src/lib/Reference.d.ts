import { Collection } from "./Collection";
import { DatabaseProvider } from "./DatabaseProvider";
import { Document } from "./Document";
import { Query } from "./Query";
export declare class Reference {
    private readonly database;
    readonly path: string;
    params: URLSearchParams;
    constructor(database: DatabaseProvider, path: string);
    child(path: string): Reference;
    orderByKey(): Query;
    orderByValue(): Query;
    orderByChild(child: string): Query;
    list(): Promise<Collection>;
    get(): Promise<Document>;
}
//# sourceMappingURL=Reference.d.ts.map