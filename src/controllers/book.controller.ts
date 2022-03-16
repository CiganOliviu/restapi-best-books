import { Request, Response } from 'express';
import booksModel from '../models/books.models';
import { getInstanceById } from '../helpers/general.controllers';

export async function getBookController(request: Request, response: Response) {
    return getInstanceById(request, response, booksModel);
}