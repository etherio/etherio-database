"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
var Reference_1 = require("./Reference");
var Database = (function () {
    function Database(provider) {
        this.provider = provider;
    }
    Database.prototype.ref = function (path) {
        return new Reference_1.Reference(this.provider, path);
    };
    return Database;
}());
exports.Database = Database;
//# sourceMappingURL=Database.js.map