import { Request, Response } from 'express';
import booksModel from '../models/books.models';
import { isDeleteRequest, isGetRequest, isPostRequest, 
    isUpdateRequest, operateWithDeleteRequest, operateWithGetRequest, 
    operateWithPostRequest, 
    operateWithUpdateRequest } from '../helpers/general.controllers';

export async function operateOverBooksController(request: Request, response: Response) {
    const requestData = request.body;

    if (isGetRequest(request)) {
        return operateWithGetRequest(response, booksModel);
    }
    
    if (isPostRequest(request)) {
        return operateWithPostRequest(response, requestData, booksModel);
    }

    if (isDeleteRequest(request)) {
        return operateWithDeleteRequest(response, requestData, booksModel)
    }

    if (isUpdateRequest(request)) {
        const oldData = await booksModel.find({ _id: requestData._id });
        const updatedData = {
            author: requestData.author || oldData[0].author,
            title: requestData.title || oldData[0].title,
            description: requestData.description || oldData[0].description,
            mark: requestData.mark || oldData[0].mark,
            cover: requestData.cover || oldData[0].cover,
            current_market_price: requestData.current_market_price || oldData[0].current_market_price,
            pages: requestData.pages || oldData[0].pages,
            category: requestData.category || oldData[0].category,
            owned: requestData.owned || oldData[0].owned,
        }
        return operateWithUpdateRequest(response, requestData, updatedData, booksModel);
    }

    return response.sendStatus(404);
}