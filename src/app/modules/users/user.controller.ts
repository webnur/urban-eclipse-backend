import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";
import httpStatus from "http-status";
// import httpStatus from "http-status";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body); // Log the request body
    const result = req.body;
    res.status(httpStatus.OK).json({
      success: true,
      message: "create user successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};


const readUser = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.readUser();
    res.status(httpStatus.OK).json({
      success: true,
      message: "read user successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
}



export const UserController = {
  createUser,
  readUser
};
