import { Types } from 'mongoose';

export type TCategory = {
  name: string;
  productId: Types.ObjectId;
  isDeleted: boolean;
  status: 'active' | 'deactive';
};
