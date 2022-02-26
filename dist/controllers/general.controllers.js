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
Object.defineProperty(exports, "__esModule", { value: true });
exports.operateWithUpdateRequest = exports.operateWithDeleteRequest = exports.operateWithPostRequest = exports.operateWithGetRequest = void 0;
function operateWithGetRequest(response, model) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield model.find({});
        return response.send(data);
    });
}
exports.operateWithGetRequest = operateWithGetRequest;
function operateWithPostRequest(response, objectFields, model) {
    return __awaiter(this, void 0, void 0, function* () {
        const newEntry = yield model.create(objectFields);
        return response.send(newEntry);
    });
}
exports.operateWithPostRequest = operateWithPostRequest;
function operateWithDeleteRequest(response, objectId, model) {
    return __awaiter(this, void 0, void 0, function* () {
        const deleteEntry = yield model.deleteOne({ _id: objectId._id });
        return response.send(deleteEntry);
    });
}
exports.operateWithDeleteRequest = operateWithDeleteRequest;
function operateWithUpdateRequest(response, objectsFields, updatedData, model) {
    return __awaiter(this, void 0, void 0, function* () {
        const updateEntry = yield model.findOneAndUpdate({ _id: objectsFields._id }, updatedData);
        return response.send(updateEntry);
    });
}
exports.operateWithUpdateRequest = operateWithUpdateRequest;
//# sourceMappingURL=general.controllers.js.map