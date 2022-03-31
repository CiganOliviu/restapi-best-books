import { Request, Response } from 'express';
import { getInstanceById } from '../helpers/general.controllers'; 
import styleComponentsModel from '../models/style_components.models';

export async function getStyleComponentController(request: Request, response: Response) {
    return getInstanceById(request, response, styleComponentsModel);
}