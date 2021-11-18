import { Collection } from "./Collection";
import { Document } from "./Document";
import { Reference } from "./Reference";
export declare class Query {
    private readonly ref;
    readonly params: URLSearchParams;
    constructor(ref: Reference);
    orderBy(key: string): this;
    limitToLast(limit: number): this;
    limitToFirst(limit: number): this;
    list(): Promise<Collection>;
    get(): Promise<Document>;
}
//# sourceMappingURL=Query.d.ts.map