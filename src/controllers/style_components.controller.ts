import { Request, Response } from 'express';
import { isDeleteRequest, isGetRequest, isPostRequest, isUpdateRequest, operateWithDeleteRequest, operateWithGetRequest, operateWithPostRequest, operateWithUpdateRequest } from '../helpers/general.controllers';
import styleComponentsModel from '../models/style_components.models';

export async function operateOverStyledComponentsController(request: Request, response: Response) {
    const requestData = request.body;

    if (isGetRequest(request)) {
        return operateWithGetRequest(response, styleComponentsModel);
    }

    if (isPostRequest(request)) {
        return operateWithPostRequest(response, requestData, styleComponentsModel);
    }

    if (isDeleteRequest(request)) {
        return operateWithDeleteRequest(response, requestData, styleComponentsModel);
    }

    if (isUpdateRequest(request)) {
        const oldData = await styleComponentsModel.find({ _id: requestData._id });
        const updateData = {
            app_theme: requestData.app_theme || oldData[0].app_theme,
        }
        return operateWithUpdateRequest(response, requestData, updateData, styleComponentsModel);
    }

    return response.sendStatus(404);
}