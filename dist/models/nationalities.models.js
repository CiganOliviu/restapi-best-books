"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    name: { type: String, required: true, unique: false }
});
const nationalitiesModel = mongoose_1.default.model('nationalitiesModel', schema);
exports.default = nationalitiesModel;
//# sourceMappingURL=nationalities.models.js.map