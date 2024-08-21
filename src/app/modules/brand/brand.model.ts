import { model, Schema } from 'mongoose';
import { TBrand } from './brand.interface';

const brandSchema = new Schema<TBrand>({
  name: { type: String, required: [true, 'Name is required'] },
  image: { type: String, required: [true, 'Image is required'] },
  isDeleted: { type: Boolean, default: false },
  isFeatured: { type: Boolean, default: false },
});

export const Brand = model<TBrand>('Brand', brandSchema);
