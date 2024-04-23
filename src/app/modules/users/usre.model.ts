import { Schema, model } from "mongoose";
import { IUser, UserModel } from "./user.interface";

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  password: { type: String, required: true },
});

// model
export const User = model<IUser, UserModel>("User", userSchema);
