import { Express } from 'express'; 
import { operateOverAuthorsController } from '../controllers/authors.controller';
import { operateOverBooksController } from '../controllers/books.controller';
import { operateOverCategoriesController } from '../controllers/categories.controller';

export function setRoutes(app: Express) {

    app.use('/categories', operateOverCategoriesController);
    app.use('/authors', operateOverAuthorsController);
    app.use('/books', operateOverBooksController);
}