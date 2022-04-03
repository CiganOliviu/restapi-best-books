import { Request, Response } from 'express';
import { isDeleteRequest, isGetRequest, isPostRequest, isUpdateRequest, operateWithDeleteRequest, operateWithGetRequest, operateWithPostRequest, operateWithUpdateRequest } from '../helpers/general.controllers';
import nationalityModel from '../models/nationalities.models';

export async function operateOverNationalitiesController(request: Request, response: Response) {
    const requestData = request.body;

    if (isGetRequest(request)) {
        return operateWithGetRequest(response, nationalityModel);
    }
    
    if (isPostRequest(request)) {
        return operateWithPostRequest(response, requestData, nationalityModel);
    }

    if (isDeleteRequest(request)) {
        return operateWithDeleteRequest(response, requestData, nationalityModel);
    }

    if (isUpdateRequest(request)) {
        const oldData = await nationalityModel.find({ _id: requestData._id });
        const updatedData = {
            name: requestData.name || oldData[0].name,
        }
        return operateWithUpdateRequest(response, requestData, updatedData, nationalityModel);
    }

    return response.sendStatus(404);
}