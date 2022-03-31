import { Express } from 'express'; 
import { configs } from '../configs/configs';
import { operateOverAppLayoutController } from '../controllers/app_layout.controller';
import { getAppLayoutElementController } from '../controllers/app_layout_element.controller';
import { getAuthorController } from '../controllers/author.controller';
import { operateOverAuthorsController } from '../controllers/authors.controller';
import { getBookController } from '../controllers/book.controller';
import { operateOverBooksController } from '../controllers/books.controller';
import { operateOverCategoriesController } from '../controllers/categories.controller';
import { getCategoryController } from '../controllers/category.controller';
import { operateOverNationalitiesController } from '../controllers/nationalities.controller';
import { getNationalityController } from '../controllers/nationality.controller';
import { operateOverSchemasController } from '../controllers/schemas.controller';
import { getStyleComponentController } from '../controllers/style_component.controller';
import { operateOverStyledComponentsController } from '../controllers/style_components.controller';

export default function setRoutes(app: Express, cors: (corsOptions: object) => never) {
    app.use(cors(configs.corsOptions));
    app.use('/categories/:id', getCategoryController);
    app.use('/categories', operateOverCategoriesController);
    app.use('/authors/:id', getAuthorController);
    app.use('/authors', operateOverAuthorsController);
    app.use('/books/:id', getBookController);
    app.use('/books', operateOverBooksController);
    app.use('/nationalities/:id', getNationalityController);
    app.use('/nationalities', operateOverNationalitiesController);
    app.use('/schemas', operateOverSchemasController);
    app.use('/style-components', operateOverStyledComponentsController);
    app.use('/style-component/:id', getStyleComponentController);
    app.use('/app-layout', operateOverAppLayoutController);
    app.use('/app-layout/:id', getAppLayoutElementController);
}