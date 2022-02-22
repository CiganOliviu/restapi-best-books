import { Express } from 'express'; 
import { operateOverAuthorsController } from '../controllers/authors.controller';

export function setRoutes(app: Express) {

    app.use('/authors', operateOverAuthorsController);
}