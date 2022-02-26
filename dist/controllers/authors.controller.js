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
exports.operateOverAuthorsController = void 0;
const authors_models_1 = __importDefault(require("../models/authors.models"));
function operateOverAuthorsController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        if (request.method === 'POST') {
            const { profile_picture, first_name, last_name, age, nationality, occupation, website } = request.body;
            const newAuthorEntry = yield authors_models_1.default.create({ profile_picture, first_name, last_name, age, nationality, occupation, website });
            return response.send(newAuthorEntry);
        }
        else if (request.method === 'GET') {
            const data = yield authors_models_1.default.find({});
            return response.send(data);
        }
        else if (request.method === 'DELETE') {
            const { id } = request.body;
            const deleteEntry = yield authors_models_1.default.deleteOne({ id: id });
            return response.send(deleteEntry);
        }
        return response.sendStatus(404);
    });
}
exports.operateOverAuthorsController = operateOverAuthorsController;
//# sourceMappingURL=authors.controller.js.map