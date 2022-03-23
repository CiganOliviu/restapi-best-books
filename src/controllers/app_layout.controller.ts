import { Request, Response } from "express";
import { isDeleteRequest, isGetRequest, isPostRequest, isUpdateRequest, operateWithDeleteRequest, operateWithGetRequest, operateWithPostRequest, operateWithUpdateRequest } from "../helpers/general.controllers";
import appLayoutModel from "../models/app_layout.models";

export async function operateOverAppLayoutController(request: Request, response: Response) {

    if (isGetRequest(request)) {
        return operateWithGetRequest(response, appLayoutModel);
    }

    if (isPostRequest(request)) {
        const requestData = request.body;
        return operateWithPostRequest(response, requestData, appLayoutModel);
    }

    if (isDeleteRequest(request)) {
        const requestId = request.body;
        return operateWithDeleteRequest(response, requestId, appLayoutModel);
    }

    if (isUpdateRequest(request)) {
        const requestData = request.body;
        const oldData = await appLayoutModel.find({ _id: requestData._id });
        const updatedData = {
            target_page: requestData.target_page || oldData[0].target_page,
            style: requestData.style || oldData[0].style,
        }

        return operateWithUpdateRequest(response, requestData, updatedData, appLayoutModel);
    }

    return response.sendStatus(404);
}