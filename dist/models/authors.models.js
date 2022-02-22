"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    id: Number,
    first_name: { type: String, required: true, unique: false },
    last_name: { type: String, requred: true, unique: false },
    age: { type: Number, required: false, unique: false }
});
const authorsModel = mongoose_1.default.model('authorsModel', schema);
exports.default = authorsModel;
//# sourceMappingURL=authors.models.js.map