import { Database } from "../src/main";
import { AxiosProvider } from "../src/providers/AxiosProvider";

const provider = new AxiosProvider("", "");

const toJSON = (obj: any) => JSON.parse(JSON.stringify(obj));

const db = new Database(provider);
const productRef = db.ref("products");
const q = productRef.orderByKey().limitToLast(15);

q.list().then((collection) => {
  let products = collection.toArray();
  console.log(toJSON(products));
});
