import { Collection } from "./Collection";
import { Document } from "./Document";
import { Reference } from "./Reference";
export interface DatabaseProvider {
    get(ref: Reference): Promise<Document>;
    list(ref: Reference): Promise<Collection>;
}
//# sourceMappingURL=DatabaseProvider.d.ts.map