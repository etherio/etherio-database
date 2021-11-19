"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosProvider = void 0;
var axios_1 = __importDefault(require("axios"));
var Collection_1 = require("../lib/Collection");
var Document_1 = require("../lib/Document");
var main_1 = require("../main");
var AxiosProvider = (function () {
    function AxiosProvider(databaseUrl, secret) {
        this.databaseUrl = databaseUrl;
        this.params = new URLSearchParams();
        this.params.append("auth", secret);
    }
    AxiosProvider.prototype.ref = function (path) {
        return new main_1.Reference(this, path);
    };
    AxiosProvider.prototype.orderByKey = function () {
        this.params.append("orderBy", '"$key"');
        return new main_1.Query(this);
    };
    AxiosProvider.prototype.orderByValue = function () {
        this.params.append("orderBy", '"$value"');
        return new main_1.Query(this);
    };
    AxiosProvider.prototype.orderByChild = function (child) {
        this.params.append("orderBy", '"' + child + '"');
        return new main_1.Query(this);
    };
    AxiosProvider.prototype.limitToFirst = function (limit) {
        this.params.append("limitToFirst", limit.toString());
        return new main_1.Query(this);
    };
    AxiosProvider.prototype.limitToLast = function (limit) {
        this.params.append("limitToLast", limit.toString());
        return new main_1.Query(this);
    };
    AxiosProvider.prototype.get = function (ref) {
        var url = "".concat(this.databaseUrl, "/").concat(ref.path, ".json?").concat(this.params.toString());
        return axios_1.default.get(url).then(function (_a) {
            var data = _a.data;
            return new Document_1.Document(data);
        });
    };
    AxiosProvider.prototype.list = function (ref) {
        var url = "".concat(this.databaseUrl, "/").concat(ref.path, ".json?").concat(this.params.toString());
        return axios_1.default.get(url).then(function (_a) {
            var data = _a.data;
            return new Collection_1.Collection(data);
        });
    };
    return AxiosProvider;
}());
exports.AxiosProvider = AxiosProvider;
//# sourceMappingURL=AxiosProvider.js.map