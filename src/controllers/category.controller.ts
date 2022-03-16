import { Request, Response } from 'express';
import { getInstanceById } from '../helpers/general.controllers';
import categoriesModel from '../models/categories.models';

export async function getCategoryController(request: Request, response: Response) {
    return getInstanceById(request, response, categoriesModel);
}