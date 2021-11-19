"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = void 0;
var tslib_1 = require("tslib");
var Document = (function () {
    function Document(_id, data) {
        this._id = _id;
        this.data = data;
    }
    Document.prototype.toJSON = function () {
        return (0, tslib_1.__assign)({ _id: this._id }, this.data);
    };
    return Document;
}());
exports.Document = Document;
//# sourceMappingURL=Document.js.map