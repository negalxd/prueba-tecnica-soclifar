import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  const MONGO_URI =
    process.env.MONGO_URI || "mongodb://localhost/backend-productos";
  try {
    await mongoose.connect(MONGO_URI, {
      dbName: "backend-productos",
    });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};
