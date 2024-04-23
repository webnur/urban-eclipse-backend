import { IUser } from "./user.interface";
import { User } from "./usre.model";

const createUser = async (data: IUser) => {
  //   console.log(data);
  const result = await User.create(data);

  return result;
};

export const UserService = {
  createUser,
};
