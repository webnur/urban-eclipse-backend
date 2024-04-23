import { z } from "zod";

const createUser = z.object({
  body: z.object({
    name: z.string({ required_error: "name not provided" }),
    email: z.string({ required_error: "email is required" }),
    password: z.string({ required_error: "password is required" }),
  }),
});

export const UserValidation = {
  createUser,
};
