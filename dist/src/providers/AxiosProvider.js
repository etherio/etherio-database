"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosProvider = void 0;
var axios_1 = __importDefault(require("axios"));
var Collection_1 = require("../lib/Collection");
var Document_1 = require("../lib/Document");
var AxiosProvider = (function () {
    function AxiosProvider(databaseUrl, secret) {
        this.databaseUrl = databaseUrl;
        this.secret = secret;
    }
    AxiosProvider.prototype.get = function (ref) {
        ref.params.append("auth", this.secret);
        var url = "".concat(this.databaseUrl, "/").concat(ref.path, ".json?").concat(ref.params.toString());
        return axios_1.default.get(url).then(function (_a) {
            var data = _a.data;
            return new Document_1.Document(data);
        });
    };
    AxiosProvider.prototype.list = function (ref) {
        ref.params.append("auth", this.secret);
        var url = "".concat(this.databaseUrl, "/").concat(ref.path, ".json?").concat(ref.params.toString());
        return axios_1.default.get(url).then(function (_a) {
            var data = _a.data;
            return new Collection_1.Collection(data);
        });
    };
    return AxiosProvider;
}());
exports.AxiosProvider = AxiosProvider;
//# sourceMappingURL=AxiosProvider.js.map