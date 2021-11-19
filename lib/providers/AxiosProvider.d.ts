import { Collection } from "../lib/Collection";
import { Document } from "../lib/Document";
import { DatabaseProvider, Query, Reference } from "../main";
export declare class AxiosProvider implements DatabaseProvider {
    private readonly databaseUrl;
    private readonly params;
    constructor(databaseUrl: string, secret: string);
    ref(path: string): Reference;
    orderByKey(): Query;
    orderByValue(): Query;
    orderByChild(child: string): Query;
    limitToFirst(limit: number): Query;
    limitToLast(limit: number): Query;
    equalTo(value: string): Query;
    startAt(value: string): Query;
    endAt(value: string): Query;
    get(ref: Reference): Promise<Document>;
    list(ref: Reference): Promise<Collection>;
}
//# sourceMappingURL=AxiosProvider.d.ts.map