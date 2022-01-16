import mongoose, { Document } from 'mongoose';

export interface AuthorsModel extends Document {
    id: number;
    first_name: string;
    last_name: string;
    born: Date;
    occupation: string;
    website: URL;
}

const schema = new mongoose.Schema({
    id: Number,
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    born: { type: Date, required: true },
    occupation: { type: String, required: false },
    website: { type: String, required: false }
});

const authorsModel = mongoose.model<AuthorsModel>('authorsModel', schema);

export default authorsModel;