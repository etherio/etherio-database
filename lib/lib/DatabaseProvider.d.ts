import { Collection } from "./Collection";
import { Document } from "./Document";
import { Query } from "./Query";
import { Reference } from "./Reference";
export interface DatabaseProvider {
    ref(path: string): Reference;
    orderByKey(): Query;
    orderByValue(): Query;
    orderByChild(child: string): Query;
    limitToLast(limit: number): Query;
    limitToFirst(limit: number): Query;
    equalTo(value: string): Query;
    startAt(value: string): Query;
    endAt(value: string): Query;
    get(ref: Reference): Promise<Document>;
    list(ref: Reference, toArray: boolean): Promise<Collection | Document[]>;
}
//# sourceMappingURL=DatabaseProvider.d.ts.map