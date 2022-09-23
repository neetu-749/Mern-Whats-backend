import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async (username, password) => {
    const URL =  `mongodb://${USERNAME}:${PASSWORD}@ac-ummpdmz-shard-00-00.sd0cgq7.mongodb.net:27017,ac-ummpdmz-shard-00-01.sd0cgq7.mongodb.net:27017,ac-ummpdmz-shard-00-02.sd0cgq7.mongodb.net:27017/?ssl=true&replicaSet=atlas-10p4dg-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error connecting with database: ', error.message);
    }

};

export default Connection;