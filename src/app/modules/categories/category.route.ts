import express from "express";
import { CategoryController } from "./category.controller";
import validateRequest from "../../middlewares/validateRequrest";
import { CategoryValidation } from "./category.validation";

const router = express.Router();
router.post(
  "/create",
  validateRequest(CategoryValidation.create),
  CategoryController.create
);

router.get("/", CategoryController.getCategories);
router.get("/:id", CategoryController.getSingleCategory);
router.patch("/:id", CategoryController.updateCategory);
router.delete("/:id", CategoryController.deleteCategory);

export const CategoryRoutes = router;
