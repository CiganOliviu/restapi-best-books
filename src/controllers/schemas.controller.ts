import { Request, Response } from 'express';
import { isDeleteRequest, isGetRequest, isPostRequest, isUpdateRequest, operateWithDeleteRequest, operateWithGetRequest, operateWithPostRequest, operateWithUpdateRequest } from '../helpers/general.controllers';
import schemaModel from '../models/schemas.models';

export async function operateOverSchemasController(request: Request, response: Response) {
    const requestData = request.body;

    if (isGetRequest(request)) {
        return operateWithGetRequest(response, schemaModel);
    }

    if (isPostRequest(request)) {
        return operateWithPostRequest(response, requestData, schemaModel);
    }

    if (isDeleteRequest(request)) {
        return operateWithDeleteRequest(response, requestData, schemaModel);
    }

    if (isUpdateRequest(request)) {
        const oldData = await schemaModel.find({ _id: requestData._id });
        const updateData = {
            name: requestData.name || oldData[0].name,
            route: requestData.route || oldData[0].route,
        }
        return operateWithUpdateRequest(response, requestData, updateData, schemaModel);
    }

    return response.sendStatus(404);
}