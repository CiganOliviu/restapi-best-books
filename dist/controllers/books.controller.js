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
function operateOverBooksController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        if (request.method === 'POST') {
            const { id, author, title, description, mark, cover, current_market_price, pages, category } = request.body;
            const newBookEntry = yield books_models_1.default.create({
                id, author, title, description,
                mark, cover, current_market_price,
                pages, category
            });
            return response.send(newBookEntry);
        }
        if (request.method === 'GET') {
            const data = yield books_models_1.default.find({});
            return response.send(data);
        }
        if (request.method === 'DELETE') {
            const { id } = request.body;
            const deleteEntry = yield books_models_1.default.deleteOne({ id: id });
            return response.send(deleteEntry);
        }
        if (request.method === 'PUT') {
            const { id, author, title, description, mark, cover, current_market_price, pages, category } = request.body;
            const oldData = yield books_models_1.default.find({ id: id });
            const updatedData = {
                author: author || oldData[0].author,
                title: title || oldData[0].title,
                description: description || oldData[0].description,
                mark: mark || oldData[0].mark,
                cover: cover || oldData[0].cover,
                current_market_price: current_market_price || oldData[0].current_market_price,
                pages: pages || oldData[0].pages,
                category: category || oldData[0].category,
            };
            const updateEntry = yield books_models_1.default.findOneAndUpdate({ id: id }, updatedData);
            return response.send(updateEntry);
        }
        return response.sendStatus(404);
    });
}
exports.operateOverBooksController = operateOverBooksController;
//# sourceMappingURL=books.controller.js.map