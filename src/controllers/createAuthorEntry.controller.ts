import { Request, Response } from 'express';
import authorsModel from '../models/authors.models';

export async function createAuthorEntry(request: Request, response: Response) {
    
    const { 
        first_name, last_name, born, 
        occupation, website
    } = request.body;

    const newAuthorEntry = await authorsModel.create({ first_name, last_name, 
        born, occupation, website });

    return response.send(newAuthorEntry);

}