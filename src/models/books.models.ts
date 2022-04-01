import mongoose, { Document, Schema } from "mongoose";
import { AuthorsModel } from "./authors.models";
import { CategoriesModel } from "./categories.models";

export interface BooksModel extends Document {
    author: AuthorsModel;
    title: string;
    description: string;
    mark: number;
    cover: string;
    current_market_price: number;
    pages: number;
    category: CategoriesModel;
    owned: boolean;
}

const schema = new mongoose.Schema({
    
    author: [
        { type: Schema.Types.ObjectId, ref: 'authorsModel' }
    ],
    title: { type: String, required: true, unique: false },
    description: { type: String, required: true, unique: false },
    mark: { type: Number, required: false, unique: false },
    cover: { type: String, required: true, unique: false },
    current_market_price: { type: Number, required: false, unique: false },
    pages: { type: Number, required: false, unique: false },
    category: [
        { type: Schema.Types.ObjectId, ref: 'categoriesModel' }
    ],
    owned: { type: Number, required: true, unique: false }
})

const booksModel = mongoose.model<BooksModel>('booksModel', schema);

export default booksModel;