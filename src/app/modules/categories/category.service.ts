import { ICategory } from "./category.interface";
import { Category } from "./category.model";

const create = async (payload: ICategory) => {
  const result = await Category.create(payload);
  return result;
};

const getCategories = async (): Promise<ICategory[]> => {
  const result = await Category.find();
  return result;
};

const getSingleCategory = async (id: string): Promise<ICategory | null> => {
  const result = await Category.findById(id);
  return result;
};

const updateCategory = async (
  id: string,
  payload: Partial<ICategory>
): Promise<ICategory | null> => {
  const result = await Category.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteCategory = async (id: string): Promise<ICategory | null> => {
  const result = await Category.findByIdAndDelete(id);
  return result;
};

export const CategoryService = {
  create,
  getCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
