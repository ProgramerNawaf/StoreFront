import express from 'express';
import { getOrder, create, addProduct } from '../controller/orderContoller';
import verifyAuthToken from '../middleware/verifyAuth';

const router = express.Router();

router.get('/getCustomerOrders/:customer_id', verifyAuthToken, getOrder);

router.post('/addProduct/:order_id', verifyAuthToken, addProduct);
router.post('/createOrder/:customer_id', verifyAuthToken, create);

export default router;
