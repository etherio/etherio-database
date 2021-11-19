"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var process_1 = require("process");
var main_1 = require("../src/main");
var AxiosProvider_1 = require("../src/providers/AxiosProvider");
var databaseURL = process_1.env.FIREBASE_DATABASE_URL || "";
var databaseSecret = process_1.env.FIREBASE_DATABASE_SECRET || "";
var provider = new AxiosProvider_1.AxiosProvider(databaseURL, databaseSecret);
var toJSON = function (obj) { return JSON.parse(JSON.stringify(obj)); };
var db = new main_1.Database(provider);
var dbRef = db.ref("transactions");
var q = dbRef.orderByKey().limitToLast(15);
q.list().then(function (collection) {
    var data = collection.toArray();
    console.log(toJSON(data));
});
console.log(q);
//# sourceMappingURL=main.test.js.map