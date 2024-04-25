import { Schema, model } from "mongoose";
import { IProduct, ProductsModel } from "./product.interface";

const productSchema = new Schema<IProduct, ProductsModel>({
  name: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discountedPrice: {
    type: Number,
    default: null,
  },
  description: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
  numReviews: {
    type: Number,
    required: true,
  },
  features: {
    type: [String],
    default: [],
  },
  availability: {
    type: Boolean,
    required: true,
  },
  stockQuantity: {
    type: Number,
    required: true,
  },
  isNewArrival: {
    type: Boolean,
    default: false,
  },
  isBestSeller: {
    type: Boolean,
    default: false,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
});

export const Product = model<IProduct, ProductsModel>("Product", productSchema);
