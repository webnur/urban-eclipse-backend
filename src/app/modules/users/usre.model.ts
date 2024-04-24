import { Schema, model } from "mongoose";
import { IUser, UserModel } from "./user.interface";

const userSchema = new Schema<IUser, UserModel>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

// model
// export const User = model<IUser, UserModel>("User", userSchema);
export const User = model<IUser, UserModel>("User", userSchema);
