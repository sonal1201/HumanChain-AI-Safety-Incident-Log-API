import mongoose from "mongoose";
import config from "./index";

async function connectDB() {
  try {
    await mongoose.connect(config.DB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Unable to connect to the DB server");
    console.log(error);
  }
}

export default connectDB;
