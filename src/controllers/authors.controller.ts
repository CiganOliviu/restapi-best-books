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
    } else if (request.method === 'PUT') {
        const {
            id, profile_picture, first_name, last_name, 
            age, nationality, occupation, website
        } = request.body;

        const oldData = await authorsModel.find({ id: id });
      
        const updatedData = {
            profile_picture: profile_picture || oldData[0].profile_picture,
            first_name: first_name || oldData[0].first_name,
            last_name: last_name || oldData[0].last_name,
            age: age || oldData[0].age,
            nationality: nationality || oldData[0].nationality,
            occupation: occupation || oldData[0].occupation,
            website: website || oldData[0].website,
        }

        const updateEntry = await authorsModel.findOneAndUpdate({ id: id }, updatedData);

        return response.send(updateEntry)
    }

    return response.sendStatus(404);
}