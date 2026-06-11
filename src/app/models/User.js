import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: String,
    email: {
      type: String,
      unique: true,
    },
    role: {
      type: String,
      default: "user",
    },
    password: String,
  },
  { timestamps: true },
);

export default mongoose.models.User || mongoose.model("User", userSchema);
