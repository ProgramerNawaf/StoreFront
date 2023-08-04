import express from 'express';
import {
  getProduct,
  postProduct,
  deleteProduct,
  updateProduct,
  getProductById,
  createOrder,
  checkoutOrder,
} from '../controller/productController';
import verifyAuthToken from '../middleware/verifyAuth';

const router = express.Router();
router.get('/get', getProduct);

router.get('/get/:id', getProductById);

router.post('/post/:merchant_id', verifyAuthToken, postProduct);

router.delete('/delete/:id', verifyAuthToken, deleteProduct);

router.put('/update/:id', verifyAuthToken, updateProduct);

router.post(
  '/createOrder/:customer_id/:product_id',
  verifyAuthToken,
  createOrder,
);

router.post(
  '/checkoutOrder/:customer_id/:order_id',
  verifyAuthToken,
  checkoutOrder,
);

export default router;
