"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reference = void 0;
var Query_1 = require("./Query");
var Reference = (function () {
    function Reference(database, path) {
        this.database = database;
        this.path = path;
        this.params = new URLSearchParams();
    }
    Reference.prototype.child = function (path) {
        return new Reference(this.database, [this.path, path].join("/"));
    };
    Reference.prototype.orderByKey = function () {
        return new Query_1.Query(this).orderBy('"$key"');
    };
    Reference.prototype.orderByValue = function () {
        return new Query_1.Query(this).orderBy("value");
    };
    Reference.prototype.orderByChild = function (child) {
        return new Query_1.Query(this).orderBy("\"".concat(child, "\""));
    };
    Reference.prototype.list = function () {
        return this.database.list(this);
    };
    Reference.prototype.get = function () {
        return this.database.get(this);
    };
    return Reference;
}());
exports.Reference = Reference;
//# sourceMappingURL=Reference.js.map