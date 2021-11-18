"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
var Query = (function () {
    function Query(ref) {
        this.ref = ref;
        this.params = ref.params;
    }
    Query.prototype.orderBy = function (key) {
        this.params.append("orderBy", key);
        return this;
    };
    Query.prototype.limitToLast = function (limit) {
        this.params.append("limitToLast", limit.toString());
        return this;
    };
    Query.prototype.limitToFirst = function (limit) {
        this.params.append("limitToFirst", limit.toString());
        return this;
    };
    Query.prototype.list = function () {
        return this.ref.list();
    };
    Query.prototype.get = function () {
        return this.ref.get();
    };
    return Query;
}());
exports.Query = Query;
//# sourceMappingURL=Query.js.map