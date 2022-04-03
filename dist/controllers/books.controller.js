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
exports.operateOverBooksController = void 0;
const books_models_1 = __importDefault(require("../models/books.models"));
const general_controllers_1 = require("../helpers/general.controllers");
function operateOverBooksController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const requestData = request.body;
        if ((0, general_controllers_1.isGetRequest)(request)) {
            return (0, general_controllers_1.operateWithGetRequest)(response, books_models_1.default);
        }
        if ((0, general_controllers_1.isPostRequest)(request)) {
            return (0, general_controllers_1.operateWithPostRequest)(response, requestData, books_models_1.default);
        }
        if ((0, general_controllers_1.isDeleteRequest)(request)) {
            return (0, general_controllers_1.operateWithDeleteRequest)(response, requestData, books_models_1.default);
        }
        if ((0, general_controllers_1.isUpdateRequest)(request)) {
            const oldData = yield books_models_1.default.find({ _id: requestData._id });
            const updatedData = {
                author: requestData.author || oldData[0].author,
                title: requestData.title || oldData[0].title,
                description: requestData.description || oldData[0].description,
                mark: requestData.mark || oldData[0].mark,
                cover: requestData.cover || oldData[0].cover,
                current_market_price: requestData.current_market_price || oldData[0].current_market_price,
                pages: requestData.pages || oldData[0].pages,
                category: requestData.category || oldData[0].category,
                owned: requestData.owned || oldData[0].owned,
            };
            return (0, general_controllers_1.operateWithUpdateRequest)(response, requestData, updatedData, books_models_1.default);
        }
        return response.sendStatus(404);
    });
}
exports.operateOverBooksController = operateOverBooksController;
//# sourceMappingURL=books.controller.js.map