"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestMethods = exports.configs = void 0;
const express_1 = __importDefault(require("express"));
exports.configs = {
    app: (0, express_1.default)(),
    port: 8080,
    host: 'localhost',
    dbUrl: 'mongodb://localhost:27017/books',
};
exports.requestMethods = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
    UPDATE: 'PUT',
};
//# sourceMappingURL=configs.js.map