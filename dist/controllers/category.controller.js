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
exports.getCategoryController = void 0;
const general_controllers_1 = require("../helpers/general.controllers");
const categories_models_1 = __importDefault(require("../models/categories.models"));
function getCategoryController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, general_controllers_1.getInstanceById)(request, response, categories_models_1.default);
    });
}
exports.getCategoryController = getCategoryController;
//# sourceMappingURL=category.controller.js.map