"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
var tslib_1 = require("tslib");
var Reference_1 = require("./Reference");
var Query = (function (_super) {
    (0, tslib_1.__extends)(Query, _super);
    function Query() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Query.prototype.orderBy = function (key) {
        return this;
    };
    Query.prototype.limitToLast = function (limit) {
        var queryRef = this.provider.limitToLast(limit);
        queryRef.path = this.path;
        return queryRef;
    };
    Query.prototype.limitToFirst = function (limit) {
        var queryRef = this.provider.limitToLast(limit);
        queryRef.path = this.path;
        return queryRef;
    };
    return Query;
}(Reference_1.Reference));
exports.Query = Query;
//# sourceMappingURL=Query.js.map