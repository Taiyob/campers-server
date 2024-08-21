import { TBrand } from './brand.interface';
import { Brand } from './brand.model';

const createBrandIntoDB = async (payLoad: TBrand) => {
  const result = await Brand.create(payLoad);

  return result;
};

export const BrandServices = { createBrandIntoDB };
