"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    app_theme: { type: String, required: false, unique: false }
});
const styleComponentsModel = mongoose_1.default.model('styleComponentsModel', schema);
exports.default = styleComponentsModel;
//# sourceMappingURL=style_components.models.js.map