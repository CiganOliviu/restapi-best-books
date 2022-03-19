import { Request, Response } from "express";
import mongoose from "mongoose";
import { generalModel, requestMethods } from "../configs/configs";

export async function operateWithGetRequest(response: Response, 
    model: mongoose.Model<generalModel>): Promise<Response> {
   
    const data = await model.find({})
    return response.send(data);
}

export async function operateWithPostRequest(response: Response, 
    objectFields: generalModel, 
    model: mongoose.Model<generalModel>): Promise<Response> {

    const newEntry = await model.create(objectFields);
    return response.send(newEntry);
}

export async function operateWithDeleteRequest(response: Response, 
    objectId: generalModel, 
    model: mongoose.Model<generalModel>): Promise<Response> {

    const deleteEntry = await model.deleteOne({ _id: objectId._id });
    return response.send(deleteEntry);
}

export async function operateWithUpdateRequest(response: Response, 
    objectsFields: generalModel, 
    updatedData: mongoose.UpdateQuery<generalModel>, 
    model: mongoose.Model<generalModel>): Promise<Response> {

    const updateEntry = await model.findOneAndUpdate({ _id: objectsFields._id }, updatedData);
    return response.send(updateEntry);
}

export async function getInstanceById(request: Request, response: Response, model: mongoose.Model<generalModel>) {
    
    const data = await model.findById(request.params.id);
    return response.send(data);
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