import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ProductService } from "./product.service";

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body;
    const result = await ProductService.create(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "created product successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ProductService.getProducts();
    res.status(httpStatus.OK).json({
      success: true,
      message: "get products successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await ProductService.getSingleProduct(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: "get single product successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const result = await ProductService.updateProduct(id, data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "update product successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await ProductService.deleteProduct(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: "delete product successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const productController = {
  create,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
