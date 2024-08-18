import { Types } from 'mongoose';

export type TProduct = {
  name: string;
  price: number;
  stockQuantity: number;
  description: string;
  categoryId: Types.ObjectId;
  images: string[];
  isFeatured?: boolean;
  isDeleted?: boolean;
  status?: boolean;
};
