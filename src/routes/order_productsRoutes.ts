import express from 'express';
import {
  createOrder,
  checkoutOrder,
  getOrderByCustomer,
} from '../controller/order_productsController';
import verifyAuthToken from '../middleware/verifyAuth';

const router = express.Router();

router.get('/get/:customer_id', verifyAuthToken, getOrderByCustomer);
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
