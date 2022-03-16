import { Request, Response } from 'express';
import authorsModel from '../models/authors.models';
import { getInstanceById } from '../helpers/general.controllers';

export async function getAuthorController(request: Request, response: Response) {
    return getInstanceById(request, response, authorsModel);
}