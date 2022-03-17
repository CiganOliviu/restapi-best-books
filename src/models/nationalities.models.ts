import mongoose, { Document } from 'mongoose';

export interface NationalitiesModel extends Document {
    name: string;
}

const schema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }
})

const nationalitiesModel = mongoose.model<NationalitiesModel>('nationalitiesModel', schema);

export default nationalitiesModel;