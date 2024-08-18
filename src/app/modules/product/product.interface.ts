import { Types } from 'mongoose';

export type TProduct = {
  name: string;
  price: number;
  stockQuantity: number;
  description: string;
  category: Types.ObjectId;
  isDeleted: boolean;
  status: boolean;
};

/*
NODE_ENV= development
PORT=5000
DATABASE_URL=mongodb+srv://mongoose-admin:2KR4dhzhdQuzQGQW@cluster0.9bycbcd.mongodb.net/campers-shop?retryWrites=true&w=majority
BCRYPT_SALT_ROUNDS=12
DEFAULT_PASS=pass123default
JWT_ACCESS_SECRET=1117ce21c5b7437159a9ac01fa9f43c3639f465c506153cff708a7f79a9de980a5b82001173641ed7d81ffd1cbb075db55773e696a672a5998c829edf7cd10a0
JWT_REFRESH_SECRET=e93e2ed3e61e2be3d95bbba50502ac13ea5007d7808ff1dd84019608f5a40446b678621b8ab31f3c22a51e538e78a61e1ef9907c79846fe4dc4977dc3788fc87
JWT_ACCESS_EXPIRES_IN=1d
JWT_REFRESH_EXPIRES_IN=365d

*/
