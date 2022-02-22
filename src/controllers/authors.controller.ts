import { Request, Response } from 'express';
import authorsModel from '../models/authors.models';

export async function operateOverAuthorsController(request: Request, response: Response) {

    if (request.method === 'POST') {
           const {
               first_name, last_name, age
           } = request.body;

           const newAuthorEntry = await authorsModel.create({ first_name, last_name, age });

           return response.send(newAuthorEntry);
    } else if (request.method === 'GET') {
        const data = await authorsModel.find({});
        
        return response.send(data);
    }

    return response.sendStatus(404);
}