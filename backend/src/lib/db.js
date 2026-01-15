import mongoose from 'mongoose';

export const connectDB = async () => {
    try{
        const {MONGO_URI} = process.env;
        if(!MONGO_URI) throw new Error(`MONGO_URI is not set`);
        
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MONGODB CONNECTED: ${connect.connection.host}`)
    }
    catch(error){
        console.error(`Error connecting to MongoDB: ${error}`)
        process.exit(1); // 1 status means failed, 0 -> success
    }
}