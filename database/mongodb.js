const { default: mongoose } = require("mongoose");
import { DB_URI, NODE_ENV } from "./../config/env";

if (!DB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.<development/production>.local");
}

const connectToDatabase = async () => {
    try {
await mongoose.connect(DB_URI);
    } catch (error) {
        console.log("Error connecting to database: ", error);

        process.exit(1);
    }
};

export default connectToDatabase;