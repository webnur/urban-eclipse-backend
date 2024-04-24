import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (data: IUser) => {
  const result = await User.create(data);
  console.log(result)
  return result;
};

const readUser = async () => {
  const result = await User.find();
  return result;
};

const findSingleUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findById(id);
  return result;
};

const updateUser = async (id: string, data: IUser) => {
  const result = await User.findByIdAndUpdate(id, data);
  return result;
};

const deleteUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

export const UserService = {
  createUser,
  readUser,
  findSingleUser,
  updateUser,
  deleteUser,
};
