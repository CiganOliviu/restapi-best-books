import mongoose, { Document } from 'mongoose';

export interface BooksModel extends Document {
    id: number;
    title: string;
}

const schema = new mongoose.Schema({
    id: Number,
    title: { type: String, required: true},
});

const booksModel = mongoose.model<BooksModel>('booksModel', schema);

export default booksModel;