import { Response } from "express";

export async function operateWithGetRequest(response: Response, model) {
    const data = await model.find({})

    return response.send(data);
}

export async function operateWithPostRequest(response: Response, objectFields, model) {
    const newEntry = await model.create(objectFields);

    return response.send(newEntry);
}

export async function operateWithDeleteRequest(response: Response, objectId, model) {
    const deleteEntry = await model.deleteOne({ _id: objectId._id });

    return response.send(deleteEntry);
}

export async function operateWithUpdateRequest(response: Response, objectsFields, updatedData, model) {
    const updateEntry = await model.findOneAndUpdate({ _id: objectsFields._id }, updatedData);

    return response.send(updateEntry);
}
