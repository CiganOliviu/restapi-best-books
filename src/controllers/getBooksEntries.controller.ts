import { Request, Response } from 'express';
import booksModel from '../models/books.model';

export async function getBooksEntries(request: Request, response: Response) {
    
    const data = await booksModel.find({});

    return response.send(data[0].title);
}