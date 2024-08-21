import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProductServices } from './product.service';

const createProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.createProductIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product created successfully',
    data: result,
  });
});

const getAllProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllProductsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product retrived successfully',
    data: result,
  });
});

const getAllFeaturedProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllFeaturedProductsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Featured product retrived successfully',
    data: result,
  });
});

const getSingledProduct = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await ProductServices.getSingleProductFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single product retrived successfully',
    data: result,
  });
});

export const ProductControllers = {
  createProduct,
  getAllProduct,
  getAllFeaturedProduct,
  getSingledProduct,
};
