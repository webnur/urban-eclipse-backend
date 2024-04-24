import { IUser } from "./user.interface";
import { User } from "./usre.model";

const createUser = async (payload: IUser) => {
  const result = await User.create(payload);
  return result;
};

const readUsers = async (): Promise<IUser[]> => {
  const result = await User.find();
  return result;
};

const findSingleUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findById(id);
  return result;
};

const updateUser = async (
  id: string,
  data: Partial<IUser>
): Promise<IUser | null> => {
  const result = await User.findByIdAndUpdate({ _id: id }, data, { new: true });
  return result;
};

const deleteUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

export const UserService = {
  createUser,
  readUsers,
  findSingleUser,
  updateUser,
  deleteUser,
};
