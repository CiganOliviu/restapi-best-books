import { Request, Response } from 'express';
import { getInstanceById } from '../helpers/general.controllers';
import nationalityModel from '../models/nationalities.models';

export async function getNationalityController(request: Request, response: Response) {
    return getInstanceById(request, response, nationalityModel);
}