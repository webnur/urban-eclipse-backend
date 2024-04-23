import { AnyZodObject, ZodEffects } from "zod";
import { Request, Response, NextFunction } from "express";

const validateRequest =
  (schema: AnyZodObject | ZodEffects<AnyZodObject>) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
        headers: req.headers,
        cookies: req.cookies,
      });

      return next();
    } catch (err) {
      next(err);
    }
  };

export default validateRequest;
