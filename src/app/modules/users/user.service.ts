import { IUser } from "./user.interface";
import { User } from "./usre.model";

const createUser = async (data: IUser) => {
  const result = await User.create({ data });

  return result;
};

export const UserService = {
  createUser,
};
