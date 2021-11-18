"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("../src/main");
var AxiosProvider_1 = require("../src/providers/AxiosProvider");
var provider = new AxiosProvider_1.AxiosProvider("", "");
var toJSON = function (obj) { return JSON.parse(JSON.stringify(obj)); };
var db = new main_1.Database(provider);
var productRef = db.ref("products");
var q = productRef.orderByKey().limitToLast(15);
q.list().then(function (collection) {
    var products = collection.toArray();
    console.log(toJSON(products));
});
//# sourceMappingURL=main.test.js.map