import mongoose, { Document } from 'mongoose';

export interface StyleComponentsModel extends Document {
    app_theme: string;
}

const schema = new mongoose.Schema({
    app_theme: { type: String, required: false, unique: false }
})

const styleComponentsModel = mongoose.model<StyleComponentsModel>('styleComponentsModel', schema);

export default styleComponentsModel;