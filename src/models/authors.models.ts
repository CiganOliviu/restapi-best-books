import mongoose, { Document } from 'mongoose';

export interface AuthorsModel extends Document {
    id: number;
    first_name: string;
    last_name: string;
    age: number;
}

const schema = new mongoose.Schema({
    id: Number,
    first_name: { type: String, required: true, unique: false },
    last_name: { type:String, requred: true, unique: false },
    age: { type: Number, required: false, unique: false }
});

const authorsModel = mongoose.model<AuthorsModel>('authorsModel', schema);

export default authorsModel;