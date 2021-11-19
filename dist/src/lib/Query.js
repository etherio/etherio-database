"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
var Reference_1 = require("./Reference");
var Query = (function (_super) {
    __extends(Query, _super);
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