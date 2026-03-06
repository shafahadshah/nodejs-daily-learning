import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
  name: String,
  balance: Number
});

export default mongoose.model("Account", accountSchema);