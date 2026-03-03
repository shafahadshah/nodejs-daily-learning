import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: 3,
      trim: true
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"]
    },
    age: {
      type: Number,
      min: 18,
      max: 60
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);