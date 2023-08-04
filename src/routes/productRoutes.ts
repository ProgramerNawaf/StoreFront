import express from 'express';
import {
  getProduct,
  postProduct,
  deleteProduct,
  updateProduct,
  getProductById,
} from '../controller/productController';
import verifyAuthToken from '../middleware/verifyAuth';

const router = express.Router();
router.get('/get', getProduct);

router.get('/get/:id', getProductById);

router.post('/post/:merchant_id', verifyAuthToken, postProduct);

router.delete('/delete/:id', verifyAuthToken, deleteProduct);

router.put('/update/:id', verifyAuthToken, updateProduct);

export default router;
