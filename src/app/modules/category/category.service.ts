import { TCategory } from './category.interface';
import { Category } from './category.model';

const createCategoryIntoDB = async (payLoad: TCategory) => {
  const result = await Category.create(payLoad);

  return result;
};

const getAllCategoryFromDB = async () => {
  const result = await Category.find();

  return result;
};

export const CategoryServices = { createCategoryIntoDB, getAllCategoryFromDB };
