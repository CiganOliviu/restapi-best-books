import { Request, Response } from 'express';
import { isUpdateRequest, isDeleteRequest, 
    isGetRequest, isPostRequest, operateWithDeleteRequest, 
    operateWithGetRequest, operateWithPostRequest, operateWithUpdateRequest } from '../helpers/general.controllers';
import categoriesModel from '../models/categories.models';

export async function operateOverCategoriesController(request: Request, response: Response) {
    const requestData = request.body;

    if (isGetRequest(request)) {
        return operateWithGetRequest(response, categoriesModel);
    }

    if (isPostRequest(request)) {
        return operateWithPostRequest(response, requestData, categoriesModel);
    }

    if (isDeleteRequest(request)) {
        return operateWithDeleteRequest(response, requestData, categoriesModel);
    }

    if (isUpdateRequest(request)) {
        const oldData = await categoriesModel.find({ _id: requestData._id });
        const updatedData = {
            name: requestData.name || oldData[0].name,
        }
        return operateWithUpdateRequest(response, requestData, updatedData, categoriesModel);
    }

    return response.sendStatus(404);
}