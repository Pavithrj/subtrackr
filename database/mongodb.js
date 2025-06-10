import { mongoose } from "mongoose";
import { DB_URI, NODE_ENV } from "./../config/env.js";

if (!DB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.<development/production>.local");
}

const connectToDatabase = async () => {
    try {
        // await mongoose.connect(DB_URI);
        await mongoose.connect("mongodb+srv://subtrackerAdmin:S@feTr4ck_2025!@subtrackercluster.ykbr6dn.mongodb.net/")
            .then(() => console.log('Connected to MongoDB'))
            .catch((err) => console.error('MongoDB connection error:', err));
    } catch (error) {
        console.log("Error connecting to database: ", error);

        process.exit(1);
    }
};

export default connectToDatabase;