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
exports.operateOverAppLayoutController = void 0;
const general_controllers_1 = require("../helpers/general.controllers");
const app_layout_models_1 = __importDefault(require("../models/app_layout.models"));
function operateOverAppLayoutController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const requestData = request.body;
        if ((0, general_controllers_1.isGetRequest)(request)) {
            return (0, general_controllers_1.operateWithGetRequest)(response, app_layout_models_1.default);
        }
        if ((0, general_controllers_1.isPostRequest)(request)) {
            return (0, general_controllers_1.operateWithPostRequest)(response, requestData, app_layout_models_1.default);
        }
        if ((0, general_controllers_1.isDeleteRequest)(request)) {
            return (0, general_controllers_1.operateWithDeleteRequest)(response, requestData, app_layout_models_1.default);
        }
        if ((0, general_controllers_1.isUpdateRequest)(request)) {
            const oldData = yield app_layout_models_1.default.find({ _id: requestData._id });
            const updatedData = {
                layout_title_id: requestData.layout_title_id || oldData[0].layout_title_id,
                target_page: requestData.target_page || oldData[0].target_page,
                style: requestData.style || oldData[0].style,
            };
            return (0, general_controllers_1.operateWithUpdateRequest)(response, requestData, updatedData, app_layout_models_1.default);
        }
        return response.sendStatus(404);
    });
}
exports.operateOverAppLayoutController = operateOverAppLayoutController;
//# sourceMappingURL=app_layout.controller.js.map