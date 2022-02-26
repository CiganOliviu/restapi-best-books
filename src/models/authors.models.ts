import mongoose, { Document } from 'mongoose';

export interface AuthorsModel extends Document {
    profile_picture: string;
    first_name: string;
    last_name: string;
    age: number;
    nationality: string;
    occupation: string;
    website: string;
}

const schema = new mongoose.Schema({
    profile_picture: { type: String, required: false, unique: true },
    first_name: { type: String, required: true, unique: false },
    last_name: { type:String, requred: true, unique: false },
    age: { type: Number, required: false, unique: false },
    nationality: { type: String, required: true, unique: false },
    occupation: { type: String, required: true, unique: false },
    website: { type: String, required: false, unique: true }
});

const authorsModel = mongoose.model<AuthorsModel>('authorsModel', schema);

export default authorsModel;