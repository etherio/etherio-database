"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reference = void 0;
var Reference = (function () {
    function Reference(provider, path) {
        this.provider = provider;
        this.path = path;
    }
    Reference.prototype.child = function (path) {
        return new Reference(this.provider, [this.path, path].join("/"));
    };
    Reference.prototype.orderByKey = function () {
        var queryRef = this.provider.orderByKey();
        queryRef.path = this.path;
        return queryRef;
    };
    Reference.prototype.orderByValue = function () {
        var queryRef = this.provider.orderByValue();
        queryRef.path = this.path;
        return queryRef;
    };
    Reference.prototype.orderByChild = function (child) {
        var queryRef = this.provider.orderByChild(child);
        queryRef.path = this.path;
        return queryRef;
    };
    Reference.prototype.equalTo = function (value) {
        var queryRef = this.provider.equalTo(value);
        queryRef.path = this.path;
        return queryRef;
    };
    Reference.prototype.startAt = function (value) {
        var queryRef = this.provider.startAt(value);
        queryRef.path = this.path;
        return queryRef;
    };
    Reference.prototype.endAt = function (value) {
        var queryRef = this.provider.endAt(value);
        queryRef.path = this.path;
        return queryRef;
    };
    Reference.prototype.get = function () {
        return this.provider.get(this);
    };
    Reference.prototype.list = function () {
        return this.provider.list(this);
    };
    return Reference;
}());
exports.Reference = Reference;
//# sourceMappingURL=Reference.js.map