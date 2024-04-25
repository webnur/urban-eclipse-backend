import express from "express";
import { productController } from "./product.controller";
import validateRequest from "../../middlewares/validateRequrest";
import { ProductValidation } from "./product.validation";

const router = express.Router();

router.get("/:id", productController.getSingleProduct);
router.get("/", productController.getProducts);
router.patch("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);
router.post(
  "/create",
  validateRequest(ProductValidation.create),
  productController.create
);

export const ProductRoutes = router;
