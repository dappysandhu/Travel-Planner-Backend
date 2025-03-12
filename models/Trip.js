import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
  title: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  destinations: [{ type: String }],
});

module.exports = mongoose.model("Trip", tripSchema);
