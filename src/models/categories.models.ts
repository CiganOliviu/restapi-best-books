import mongoose, { Document } from "mongoose";

export interface CategoriesModel extends Document {
    name: string;
}

const schema = new mongoose.Schema({
    name: { type: String, required: true, unique: false },
})

const categoriesModel = mongoose.model<CategoriesModel>('categoriesModel', schema);

export default categoriesModel;