import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";
import httpStatus from "http-status";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { data } = req.body;
    console.log(data);
    const result = await UserService.createUser(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "create user successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserController = {
  createUser,
};
