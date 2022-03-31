import { Request, Response } from 'express';
import { getInstanceById } from '../helpers/general.controllers'; 
import appLayoutModel from '../models/app_layout.models';

export async function getAppLayoutElementController(request: Request, response: Response) {
    return getInstanceById(request, response, appLayoutModel);
}