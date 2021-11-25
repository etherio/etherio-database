"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
var Document_1 = require("./Document");
var Collection = (function () {
    function Collection(data) {
        this.data = data;
    }
    Collection.prototype.toArray = function () {
        return Object.entries(this.data || {}).map(function (entries) { return new (Document_1.Document.bind.apply(Document_1.Document, __spreadArray([void 0], entries, false)))(); });
    };
    return Collection;
}());
exports.Collection = Collection;
//# sourceMappingURL=Collection.js.map