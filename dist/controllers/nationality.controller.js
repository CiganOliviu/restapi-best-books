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
exports.operateOverNationalityAuthors = void 0;
const general_controllers_1 = require("../helpers/general.controllers");
const nationality_models_1 = __importDefault(require("../models/nationality.models"));
function operateOverNationalityAuthors(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        if ((0, general_controllers_1.isGetRequest)(request)) {
            return (0, general_controllers_1.operateWithGetRequest)(response, nationality_models_1.default);
        }
        if ((0, general_controllers_1.isPostRequest)(request)) {
            const requestData = request.body;
            return (0, general_controllers_1.operateWithPostRequest)(response, requestData, nationality_models_1.default);
        }
        if ((0, general_controllers_1.isDeleteRequest)(request)) {
            const requestId = request.body;
            return (0, general_controllers_1.operateWithDeleteRequest)(response, requestId, nationality_models_1.default);
        }
        if ((0, general_controllers_1.isUpdateRequest)(request)) {
            const requestData = request.body;
            const oldData = yield nationality_models_1.default.find({ _id: requestData._id });
            const updatedData = {
                name: requestData.name || oldData[0].name,
            };
            return (0, general_controllers_1.operateWithUpdateRequest)(response, requestData, updatedData, nationality_models_1.default);
        }
        return response.sendStatus(404);
    });
}
exports.operateOverNationalityAuthors = operateOverNationalityAuthors;
//# sourceMappingURL=nationality.controller.js.map