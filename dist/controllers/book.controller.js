"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookController = void 0;
const books_models_1 = __importDefault(require("../models/books.models"));
const general_controllers_1 = require("../helpers/general.controllers");
function getBookController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, general_controllers_1.getInstanceById)(request, response, books_models_1.default);
    });
}
exports.getBookController = getBookController;
//# sourceMappingURL=book.controller.js.map