import { Request, Response } from "express";
import mongoose from "mongoose";
import { requestMethods } from "../configs/configs";
import { AuthorsModel } from "../models/authors.models";
import { BooksModel } from "../models/books.models";
import { CategoriesModel } from "../models/categories.models";

export async function operateWithGetRequest(response: Response, 
    model: mongoose.Model<AuthorsModel | BooksModel | CategoriesModel>): Promise<Response> {
   
    const data = await model.find({})
    return response.send(data);
}

export async function operateWithPostRequest(response: Response, 
    objectFields: AuthorsModel | BooksModel | CategoriesModel, 
    model: mongoose.Model<AuthorsModel | BooksModel | CategoriesModel>): Promise<Response> {

    const newEntry = await model.create(objectFields);
    return response.send(newEntry);
}

export async function operateWithDeleteRequest(response: Response, 
    objectId: AuthorsModel | BooksModel | CategoriesModel, 
    model: mongoose.Model<AuthorsModel | BooksModel | CategoriesModel>): Promise<Response> {

    const deleteEntry = await model.deleteOne({ _id: objectId._id });
    return response.send(deleteEntry);
}

export async function operateWithUpdateRequest(response: Response, 
    objectsFields: AuthorsModel | BooksModel | CategoriesModel, 
    updatedData: mongoose.UpdateQuery<AuthorsModel | BooksModel | CategoriesModel>, 
    model: mongoose.Model<AuthorsModel | BooksModel | CategoriesModel>): Promise<Response> {

    const updateEntry = await model.findOneAndUpdate({ _id: objectsFields._id }, updatedData);
    return response.send(updateEntry);
}

export function isGetRequest(request: Request): boolean {
    return request.method === requestMethods.GET;
}

export function isPostRequest(request: Request): boolean {
    return request.method === requestMethods.POST;
}

export function isDeleteRequest(request: Request): boolean {
    return request.method === requestMethods.DELETE;
}

export function isUpdateRequest(request: Request): boolean {
    return request.method === requestMethods.UPDATE;
}