import express from "express";
import { UserController } from "./user.controller";
import validateRequest from "../../middlewares/validateRequrest";
import { UserValidation } from "./user.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(UserValidation.createUser),
  UserController.createUser
);
router.get("/", UserController.readUser);
router.get("/:id", UserController.findSingleUser);
router.patch("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

export const UserRoutes = router;
