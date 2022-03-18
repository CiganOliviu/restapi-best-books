import mongoose, { Document } from 'mongoose';

export interface AppLayoutModel extends Document {
    layout_title_id: number;
}

const schema = new mongoose.Schema({
    layout_title_id: { type: String, required: true, unique: true },
})

const appLayoutModel = mongoose.model<AppLayoutModel>('appLayoutMOdel', schema);

export default appLayoutModel;