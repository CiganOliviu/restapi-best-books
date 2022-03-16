import { Express } from 'express'; 
import { configs } from '../configs/configs';
import { getAuthorController } from '../controllers/author.controller';
import { operateOverAuthorsController } from '../controllers/authors.controller';
import { getBookController } from '../controllers/book.controller';
import { operateOverBooksController } from '../controllers/books.controller';
import { operateOverCategoriesController } from '../controllers/categories.controller';
import { getCategoryController } from '../controllers/category.controller';

export default function setRoutes(app: Express, cors: (corsOptions: object) => any) {

    app.use(cors(configs.corsOptions));
    app.use('/categories/:id', getCategoryController);
    app.use('/categories', operateOverCategoriesController);
    app.use('/authors/:id', getAuthorController);
    app.use('/authors', operateOverAuthorsController);
    app.use('/books/:id', getBookController);
    app.use('/books', operateOverBooksController);
}