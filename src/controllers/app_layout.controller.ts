import { Request, Response } from "express";
import { isDeleteRequest, isGetRequest, isPostRequest, isUpdateRequest, operateWithDeleteRequest, operateWithGetRequest, operateWithPostRequest, operateWithUpdateRequest } from "../helpers/general.controllers";
import appLayoutModel from "../models/app_layout.models";

export async function operateOverAppLayoutController(request: Request, response: Response) {
    const requestData = request.body;

    if (isGetRequest(request)) {
        return operateWithGetRequest(response, appLayoutModel);
    }

    if (isPostRequest(request)) {
        return operateWithPostRequest(response, requestData, appLayoutModel);
    }

    if (isDeleteRequest(request)) {
        return operateWithDeleteRequest(response, requestData, appLayoutModel);
    }

    if (isUpdateRequest(request)) {
        const oldData = await appLayoutModel.find({ _id: requestData._id });
        const updatedData = {
            layout_title_id: requestData.layout_title_id || oldData[0].layout_title_id,
            target_page: requestData.target_page || oldData[0].target_page,
            style: requestData.style || oldData[0].style,
        }
        return operateWithUpdateRequest(response, requestData, updatedData, appLayoutModel);
    }

    return response.sendStatus(404);
}
