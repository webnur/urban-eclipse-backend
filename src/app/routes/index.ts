import express from "express";
import { UserRoutes } from "../modules/users/user.route";
import { CategoryRoutes } from "../modules/categories/category.route";

const routes = express.Router();

const ModulesRoutes = [
  {
    path: "/users",
    element: UserRoutes,
  },
  {
    path: "/category",
    element: CategoryRoutes,
  },
];

ModulesRoutes.forEach((route) => routes.use(route.path, route.element));

export default routes;
