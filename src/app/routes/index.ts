import express from "express";
import { UserRoutes } from "../modules/users/user.route";
import { CategoryRoutes } from "../modules/categories/category.route";
import { ProductRoutes } from "../modules/products/product.route";

const routes = express.Router();

const ModulesRoutes = [
  {
    path: "/users",
    element: UserRoutes,
  },
  {
    path: "/categories",
    element: CategoryRoutes,
  },
  {
    path: "/products",
    element: ProductRoutes,
  },
];

ModulesRoutes.forEach((route) => routes.use(route.path, route.element));

export default routes;
