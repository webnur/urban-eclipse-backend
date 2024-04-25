import { Model } from "mongoose";

export interface IProduct {
  name: string;
  images: string[];
  category: string;
  price: number;
  discountedPrice?: number;
  description: string;
  brand: string;
  ratings: number;
  numReviews: number;
  features?: string[];
  availability: boolean;
  stockQuantity: number;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  isFeatured?: boolean;
}

export type ProductsModel = Model<IProduct, Record<string, unknown>>;
