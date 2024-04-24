import { Schema, model } from "mongoose";
import { CategoryModel, ICategory } from "./category.interface";

const CategorySchema = new Schema<ICategory, CategoryModel>(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Category = model<ICategory, CategoryModel>(
  "Category",
  CategorySchema
);
