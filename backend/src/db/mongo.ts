import { connect, set } from 'mongoose';

const port = process.env.MONGO_PORT;
const userName = process.env.MONGO_USERNAME;
const pass = process.env.MONGO_PASSWORD;
const host = process.env.MONGO_HOST;
const dbName = process.env.MONGO_DATABASE_NAME;


export const connectToDB = async () => {
    try {
        set('strictQuery', false);
        const db = await connect(`mongodb://${userName}:${pass}@${host}:${port}/${dbName}?authSource=admin`);
        console.log('MongoDB connected to', db.connection.name);
    } catch (error) {
        console.error(error);
    }
};
