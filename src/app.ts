import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
// import httpStatus from "http-status";
import routes from "./app/routes";
import httpStatus from "http-status";

const app: Application = express();

app.use(cors());

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/v1", routes);

//handle Not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    errorMessages: {
      path: req.originalUrl,
      message: "Api Not Found",
    },
  });
  next();
});

export default app;
