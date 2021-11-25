import { env } from "process";
import { Database } from "../src/main";
import { AxiosProvider } from "../src/providers/AxiosProvider";

const databaseURL: string = env.FIREBASE_DATABASE_URL || "";
const databaseSecret: string = env.FIREBASE_DATABASE_SECRET || "";

const provider = new AxiosProvider(databaseURL, databaseSecret);

const toJSON = (obj: any) => JSON.parse(JSON.stringify(obj));

const db = new Database(provider);
const dbRef = db.ref("transactions");

let q = dbRef.orderByKey().limitToLast(15);

q.list().then((collection: any) => {
  let data = collection.toArray();
  console.log(toJSON(data));
});

console.log(q);
