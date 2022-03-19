import express from "express";
import { AuthorsModel } from "../models/authors.models";
import { BooksModel } from "../models/books.models";
import { CategoriesModel } from "../models/categories.models";
import { NationalitiesModel } from "../models/nationalities.models";
import { StyleComponentsModel } from "../models/style_components.models";

export type generalModel = AuthorsModel | BooksModel | CategoriesModel | NationalitiesModel
| StyleComponentsModel;

export const configs = {
    app: express(),
    cors: require('cors'),
    corsOptions: {
        origin: [''],
        optionsSuccessStatus: 200
    },
    port: 8080 as number,
    host: 'localhost' as string,
    dbUrl: 'mongodb://localhost:27017/books' as string,
}

export const requestMethods = {
    GET: 'GET' as string,
    POST: 'POST' as string,
    DELETE: 'DELETE' as string,
    UPDATE: 'PUT' as string,
}