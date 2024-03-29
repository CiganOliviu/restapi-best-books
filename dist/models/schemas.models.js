"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    name: { type: String, required: true, unique: false },
    route: { type: String, required: true, unique: false },
});
const schemaModel = mongoose_1.default.model('schemasModel', schema);
exports.default = schemaModel;
//# sourceMappingURL=schemas.models.js.map