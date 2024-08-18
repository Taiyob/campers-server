import { model, Schema } from 'mongoose';
import { TCategory } from './category.interface';

const categorySchema = new Schema<TCategory>({
  name: { type: String, required: [true, 'name required'] },
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: [true, 'Product ID must be needed'],
  },
  isDeleted: { type: Boolean, default: false },
  status: { type: String, enum: ['active', 'deactive'], default: 'active' },
});

export const Category = model<TCategory>('Category', categorySchema);
