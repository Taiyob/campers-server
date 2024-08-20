import { model, Schema } from 'mongoose';
import { TCategory } from './category.interface';

const categorySchema = new Schema<TCategory>({
  name: { type: String, required: [true, 'name required'] },
  image: { type: String, required: [true, 'Image is required'] },
  isDeleted: { type: Boolean, default: false },
  status: { type: String, enum: ['active', 'deactive'], default: 'active' },
});

export const Category = model<TCategory>('Category', categorySchema);
