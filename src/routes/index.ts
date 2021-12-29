import { Express, Request, Response } from "express";
import { createBookEntry } from "../controllers/createBookEntry.controller";
import { getBooksEntries } from "../controllers/getBooksEntries.controller";

function routes(app: Express) {

    app.get('/healthcheck', (request: Request, response: Response) => {
        
        return response.send("App is healthy");
    })  
    
    app.post('/api/create-book-entry', createBookEntry);
    app.get('/api/get-books-entries', getBooksEntries);
}

export default routes;