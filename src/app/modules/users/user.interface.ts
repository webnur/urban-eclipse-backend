import { Model } from "mongoose";

export interface IUser {
  name: string;
  password: string;
}

export type UserModel = Model<IUser, Record<string, unknown>>;