import { z } from "zod";

const create = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required" }),
    images: z.array(z.string(), {
      required_error: "At least one image is required",
    }),
    category: z.string({ required_error: "Category is required" }),
    price: z.number({ required_error: "Price is required" }),
    discountedPrice: z.number().optional(),
    description: z.string({ required_error: "Description is required" }),
    brand: z.string({ required_error: "Brand is required" }),
    ratings: z.number({ required_error: "Ratings is required" }),
    numReviews: z.number({ required_error: "Number of reviews is required" }),
    features: z.array(z.string()).optional(),
    availability: z.boolean({ required_error: "Availability is required" }),
    stockQuantity: z.number({ required_error: "Stock quantity is required" }),
    isNewArrival: z.boolean().optional(),
    isBestSeller: z.boolean().optional(),
    isFeatured: z.boolean().optional(),
  }),
});

export const ProductValidation = {
  create,
};
