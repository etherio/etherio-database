"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = void 0;
var Document = (function () {
    function Document(_id, data) {
        this._id = _id;
        this.data = data;
    }
    Document.prototype.toJSON = function () {
        return __assign({ _id: this._id }, this.data);
    };
    return Document;
}());
exports.Document = Document;
//# sourceMappingURL=Document.js.map