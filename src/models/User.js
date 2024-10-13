import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    uid: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
  },
  { collection: "users" }
); // Explicitly set collection name to 'users'

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
