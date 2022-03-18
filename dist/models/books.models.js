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
    author: [
        { type: mongoose_1.Schema.Types.ObjectId, ref: 'authorsModel' }
    ],
    title: { type: String, required: true, unique: false },
    description: { type: String, required: true, unique: false },
    mark: { type: Number, required: false, unique: false },
    string: { type: String, required: true, unique: true },
    current_market_price: { type: Number, required: false, unique: false },
    pages: { type: Number, required: false, unique: false },
    category: { type: String, required: true, unique: false },
    owned: { type: Number, required: true, unique: false }
});
const booksModel = mongoose_1.default.model('booksModel', schema);
exports.default = booksModel;
//# sourceMappingURL=books.models.js.map