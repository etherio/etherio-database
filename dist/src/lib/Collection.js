"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
var tslib_1 = require("tslib");
var Document_1 = require("./Document");
var Collection = (function () {
    function Collection(data) {
        this.data = data;
    }
    Collection.prototype.toArray = function () {
        return Object.entries(this.data || {}).map(function (entries) { return new (Document_1.Document.bind.apply(Document_1.Document, (0, tslib_1.__spreadArray)([void 0], entries, false)))(); });
    };
    return Collection;
}());
exports.Collection = Collection;
//# sourceMappingURL=Collection.js.map