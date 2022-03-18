import mongoose, { Document } from 'mongoose';

export interface SchemasModel extends Document { 
    name: string;
    route: string;
}

const schema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    route: { type: String, required: true, unique: true },
})

const schemaModel = mongoose.model<SchemasModel>('schemasModel', schema);

export default schemaModel;