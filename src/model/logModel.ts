import mongoose from "mongoose";

const logSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "low",
    },
  },
  {
    timestamps: true,
  }
);

const logModel = mongoose.model("log", logSchema);

export default logModel;
