import { Types } from 'mongoose';

export type TProduct = {
  name: string;
  price: number;
  stockQuantity: number;
  description: string;
  categoryId: Types.ObjectId;
  isDeleted?: boolean;
  status?: boolean;
};
