import { Express } from 'express'; 
import { operateOverAuthorsController } from '../controllers/authors.controller';
import { operateOverBooksController } from '../controllers/books.controller';

export function setRoutes(app: Express) {

    app.use('/authors', operateOverAuthorsController);
    app.use('/books', operateOverBooksController);
}