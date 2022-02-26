import { Request, Response } from 'express';
import authorsModel from '../models/authors.models';

export async function operateOverAuthorsController(request: Request, response: Response) {

    if (request.method === 'POST') {
           const {
               profile_picture, first_name, last_name, 
               age, nationality, occupation, website
           } = request.body;

           const newAuthorEntry = await authorsModel.create({ profile_picture, first_name, last_name, age, nationality, occupation, website });
           return response.send(newAuthorEntry);

    } else if (request.method === 'GET') {
        const data = await authorsModel.find({});
        return response.send(data);

    } else if (request.method === 'DELETE') {
        const { id } = request.body;
        const deleteEntry = await authorsModel.deleteOne({ id: id });

        return response.send(deleteEntry);
    }

    return response.sendStatus(404);
}