import { Request, Response } from 'express';
import authorsModel from '../models/authors.models';
import { isDeleteRequest, isGetRequest, isPostRequest, isUpdateRequest, operateWithDeleteRequest, operateWithGetRequest, operateWithPostRequest, operateWithUpdateRequest } from '../helpers/general.controllers';

export async function operateOverAuthorsController(request: Request, response: Response) {

    if (isGetRequest(request)) {
        return operateWithGetRequest(response, authorsModel);
    }

    if (isPostRequest(request)) {
        const requestData = request.body;
        return operateWithPostRequest(response, requestData, authorsModel);
    } 

    if (isDeleteRequest(request)) {
        const requestId = request.body;
        return operateWithDeleteRequest(response, requestId, authorsModel);
    } 
    
    if (isUpdateRequest(request)) {
        const requestData = request.body;
        const oldData = await authorsModel.find({ _id: requestData._id });   
        const updatedData = {
            profile_picture: requestData.profile_picture || oldData[0].profile_picture,
            first_name: requestData.first_name || oldData[0].first_name,
            last_name: requestData.last_name || oldData[0].last_name,
            age: requestData.age || oldData[0].age,
            nationality: requestData.nationality || oldData[0].nationality,
            occupation: requestData.occupation || oldData[0].occupation,
            website: requestData.website || oldData[0].website,
        }

        return operateWithUpdateRequest(response, requestData, updatedData, authorsModel);
    }

    return response.sendStatus(404);
}