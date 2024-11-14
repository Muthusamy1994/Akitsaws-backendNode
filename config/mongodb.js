
import mongoose from 'mongoose';

import dotenv from 'dotenv';


dotenv.config();

// Replace with your MongoDB connection string
const dbURI = process.env.DB_CONNECTION 
// const dbURI = 'mongodb+srv://muthumaya12:lnP1PgVCSOSZ95HH@cluster0.ouw5f.mongodb.net/GreaterCorp'; // or Mongo Atlas URL

export const connectDB = () => {
	mongoose.connect(dbURI).then(() => {
		console.log('MongoDB Connected!!!');
		return Promise.resolve({});
	});
	mongoose.connection.on('error', err => {
		log.error(err);
		console.log('Error:::', err);
		process.exit(-1);
	});
};

export default connectDB;
