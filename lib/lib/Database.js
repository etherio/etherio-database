"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
var Database = (function () {
    function Database(provider) {
        this.provider = provider;
    }
    Database.prototype.ref = function (path) {
        return this.provider.ref(path);
    };
    return Database;
}());
exports.Database = Database;
//# sourceMappingURL=Database.js.map