import { Request, Response } from 'express';
import { isUpdateRequest, isDeleteRequest, isGetRequest, isPostRequest, operateWithDeleteRequest, operateWithGetRequest, operateWithPostRequest, operateWithUpdateRequest } from '../helpers/general.controllers';
import categoriesModel from '../models/categories.models';

export async function operateOverCategoriesController(request: Request, response: Response) {

    if (isGetRequest(request)) {
        return operateWithGetRequest(response, categoriesModel);
    }

    if (isPostRequest(request)) {
        const requestData = request.body;
        return operateWithPostRequest(response, requestData, categoriesModel);
    }

    if (isDeleteRequest(request)) {
        const requestId = request.body;
        return operateWithDeleteRequest(response, requestId, categoriesModel);
    }

    if (isUpdateRequest(request)) {
        const requestData = request.body;
        const oldData = await categoriesModel.find({ _id: requestData._id });
        const updatedData = {
            name: requestData.name || oldData[0].name,
        }

        return operateWithUpdateRequest(response, requestData, updatedData, categoriesModel);
    }

    return response.sendStatus(404);
}