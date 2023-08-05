import express from 'express';
import {
  getUsers,
  getUserById,
  createUser,
  addBalance,
  deleteUser,
} from '../controller/userController';
import { getCustomrs, getCustomrById } from '../controller/customerController';
import {
  getMerchants,
  getMerchantsById,
} from '../controller/merchantController';

import verifyAuthToken from '../middleware/verifyAuth';
const router = express.Router();
router.get('/get', verifyAuthToken, getUsers);

router.get('/get/:id', verifyAuthToken, getUserById);

router.get('/getMerchants', verifyAuthToken, getMerchants);

router.get('/getMerchant/:id', verifyAuthToken, getMerchantsById);

router.get('/getCustomers', verifyAuthToken, getCustomrs);

router.get('/getCustomer/:id', verifyAuthToken, getCustomrById);

router.delete('/delete/:id', deleteUser);

router.post('/post', createUser);

router.post('/addBalance/:id', verifyAuthToken, addBalance);

export default router;
