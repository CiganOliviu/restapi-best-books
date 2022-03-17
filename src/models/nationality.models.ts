import mongoose, { Document } from 'mongoose';

export interface NationalityModel extends Document {
    name: string;
}

const schema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }
})

const nationalityModel = mongoose.model<NationalityModel>('nationalityModel', schema);

export default nationalityModel;