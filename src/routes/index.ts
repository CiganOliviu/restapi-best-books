import { Express, Request, Response } from "express";
import { createAuthorEntry } from "../controllers/createAuthorEntry.controller";
import { createBookEntry } from "../controllers/createBookEntry.controller";
import { getBooksEntries } from "../controllers/getBooksEntries.controller";

function routes(app: Express) {

    app.get('/healthcheck', (request: Request, response: Response) => {
        
        return response.send("App is healthy");
    })  
    
    app.post('/api/create-book-entry', createBookEntry);
    app.get('/api/get-books-entries', getBooksEntries);

    app.post('/api/create-author-entry', createAuthorEntry);
}

export default routes;