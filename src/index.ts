import express from "express";
import connectDB from "./config/database";
import apiRoute from "./routes";

import config from "./config";

const app = express();
app.use(express.json());

app.use("/api", apiRoute);

app.listen(config.PORT, async () => {
  try {
    await connectDB();
    console.log(`Server running ${config.PORT}`);
  } catch (error) {
    console.error("server Error", error);
  }
});
