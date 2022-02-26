"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    id: Number,
    profile_picture: { type: String, required: false, unique: true },
    first_name: { type: String, required: true, unique: false },
    last_name: { type: String, requred: true, unique: false },
    age: { type: Number, required: false, unique: false },
    nationality: { type: String, required: true, unique: false },
    occupation: { type: String, required: true, unique: false },
    website: { type: String, required: false, unique: true }
});
const authorsModel = mongoose_1.default.model('authorsModel', schema);
exports.default = authorsModel;
//# sourceMappingURL=authors.models.js.map