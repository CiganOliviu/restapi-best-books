import mongoose, { Document, Schema } from 'mongoose';
import { StyleComponentsModel } from './style_components.models';

export interface AppLayoutModel extends Document {
    layout_title_id: string;
    target_page: string;
    style: StyleComponentsModel
}

const schema = new mongoose.Schema({
    layout_title_id: { type: String, required: true, unique: true },
    target_page: { type: String, required: true, unique: false },
    style: [
        { type: Schema.Types.ObjectId, ref: 'styleComponentsModel'}
    ]
})

const appLayoutModel = mongoose.model<AppLayoutModel>('appLayoutModel', schema);

export default appLayoutModel;