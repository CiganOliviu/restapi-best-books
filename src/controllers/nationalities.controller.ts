import { Request, Response } from 'express';
import { isDeleteRequest, isGetRequest, isPostRequest, isUpdateRequest, operateWithDeleteRequest, operateWithGetRequest, operateWithPostRequest, operateWithUpdateRequest } from '../helpers/general.controllers';
import nationalityModel from '../models/nationalities.models';

export async function operateOverNationalitiesController(request: Request, response: Response) {

    if (isGetRequest(request)) {
        return operateWithGetRequest(response, nationalityModel);
    }
    
    if (isPostRequest(request)) {
        const requestData = request.body;
        return operateWithPostRequest(response, requestData, nationalityModel);
    }

    if (isDeleteRequest(request)) {
        const requestId = request.body;
        return operateWithDeleteRequest(response, requestId, nationalityModel);
    }

    if (isUpdateRequest(request)) {
        const requestData = request.body;
        const oldData = await nationalityModel.find({ _id: requestData._id });
        const updatedData = {
            name: requestData.name || oldData[0].name,
        }

        return operateWithUpdateRequest(response, requestData, updatedData, nationalityModel);
    }

    return response.sendStatus(404);
}