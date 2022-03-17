"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    profile_picture: { type: String, required: false, unique: true },
    first_name: { type: String, required: true, unique: false },
    last_name: { type: String, requred: true, unique: false },
    age: { type: Number, required: false, unique: false },
    nationality: [
        { type: mongoose_1.Schema.Types.ObjectId, ref: 'nationalityModel' }
    ],
    occupation: { type: String, required: true, unique: false },
    website: { type: String, required: false, unique: true }
});
const authorsModel = mongoose_1.default.model('authorsModel', schema);
exports.default = authorsModel;
//# sourceMappingURL=authors.models.js.map