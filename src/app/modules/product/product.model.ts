import { model, Schema } from 'mongoose';
import { TProduct } from './product.interface';

const productSchema = new Schema<TProduct>(
  {
    name: { type: String, required: [true, 'Product name is required'] },
    price: { type: Number, required: [true, 'Price is required'] },
    stockQuantity: {
      type: Number,
      required: [true, 'Quantity must be required'],
    },
    description: { type: String, required: [true, 'Please add description'] },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: [true, 'Category must be needed'],
    },
    images: {
      type: [String], // Array of strings to hold image URLs
      validate: {
        validator: (v: string[]) => Array.isArray(v) && v.length > 0,
        message: 'Product must have at least one image',
      },
    },
    isFeatured: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    status: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export const Product = model<TProduct>('Product', productSchema);
