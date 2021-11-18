import { Collection } from "../lib/Collection";
import { Document } from "../lib/Document";
import { DatabaseProvider, Reference } from "../main";
export declare class AxiosProvider implements DatabaseProvider {
    private readonly databaseUrl;
    private readonly secret;
    constructor(databaseUrl: string, secret: string);
    get(ref: Reference): Promise<Document>;
    list(ref: Reference): Promise<Collection>;
}
//# sourceMappingURL=AxiosProvider.d.ts.map