import mongoose from "mongoose";

const startupSchema = new mongoose.Schema({
  name: String,
  users: Number,
  revenue: Number,
  churnRate: Number,
  marketingSpend: Number,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Startup", startupSchema);
