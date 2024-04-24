import { NextFunction, Request, RequestHandler, Response } from "express";
import { UserService } from "./user.service";
import httpStatus from "http-status";
// import httpStatus from "http-status";

const createUser: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
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

const readUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.readUsers();
    res.status(httpStatus.OK).json({
      success: true,
      message: "read user successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const findSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await UserService.findSingleUser(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: "find single user successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const result = await UserService.updateUser(id, data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "update user successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const result = await UserService.deleteUser(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: "delete user successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserController = {
  createUser,
  readUser,
  findSingleUser,
  updateUser,
  deleteUser,
};
