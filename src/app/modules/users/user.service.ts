import { IUser } from "./user.interface";
import { User } from "./usre.model";

const createUser = async (data: IUser) => {
  const result = await User.create(data);
  return result;
};

const readUser = async() => {
  const result = await User.find();
  return result;
}

export const UserService = {
  createUser,
  readUser
};
