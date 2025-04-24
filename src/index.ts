import express from "express";
import apiRoute from "./routes";

const app = express();

app.use("/api",apiRoute);

app.listen(3000, () => {
  console.log("Server running 123");
});
