import { IProduct } from "./product.interface";
import { Product } from "./product.model";

const create = async (payload: IProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getProducts = async (): Promise<IProduct[]> => {
  const result = await Product.find();
  return result;
};

const getSingleProduct = async (id: string): Promise<IProduct | null> => {
  const result = await Product.findById(id);
  return result;
};

const updateProduct = async (
  id: string,
  payload: Partial<IProduct>
): Promise<IProduct | null> => {
  const result = await Product.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteProduct = async (id: string): Promise<IProduct | null> => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const ProductService = {
  create,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
