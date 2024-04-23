import express from "express";
import { UserRoutes } from "../modules/users/user.route";

const routes = express.Router();

const ModulesRoutes = [
  {
    path: "/users",
    element: UserRoutes,
  },
];

ModulesRoutes.forEach((route) => routes.use(route.path, route.element));

export default routes;
