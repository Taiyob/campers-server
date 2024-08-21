import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (payLoad: TProduct) => {
  const result = await Product.create(payLoad);

  return result;
};

const getAllProductsFromDB = async () => {
  const result = await Product.find(); // { isFeatured: true, isDeleted: false, status: true }

  return result;
};

const getAllFeaturedProductsFromDB = async () => {
  const result = await Product.find({
    isFeatured: true,
    isDeleted: false,
    status: true,
  });

  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);

  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getAllFeaturedProductsFromDB,
  getSingleProductFromDB,
};
