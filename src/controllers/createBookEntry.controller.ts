import { Request, Response } from 'express';
import booksModel from '../models/books.model';

export async function createBookEntry(request: Request, response: Response) {

    const { title } = request.body;
    const newBookEntry = await booksModel.create({ title });

    return response.send(newBookEntry);
}