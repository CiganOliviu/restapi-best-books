import mongoose from 'mongoose';
import configs from './configs/configs';

async function setupDatabase() {
    const dbUrl = configs.dbUrl as string;
    
    try {
        await mongoose.connect(dbUrl).then(() => {
            console.log(`DB connected to ${dbUrl}`);
        });
    } catch (error) {
        console.log(error);
    } 
}

export default setupDatabase;