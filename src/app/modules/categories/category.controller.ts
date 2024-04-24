import { NextFunction, Request, Response } from "express";
import { CategoryService } from "./category.service";
import httpStatus from "http-status";

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body;
    const result = await CategoryService.create(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "created category successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await CategoryService.getCategories();
    res.status(httpStatus.OK).json({
      success: true,
      message: "get categories successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await CategoryService.getSingleCategory(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: "get single category successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const result = await CategoryService.updateCategory(id, data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "update category successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await CategoryService.deleteCategory(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: "delete category successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const CategoryController = {
  create,
  getCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
