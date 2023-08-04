import express from 'express';
import {
  getUsers,
  getUserById,
  createUser,
  addBalance,
  getCustomrs,
  getCustomrById,
} from '../controller/userController';
import verifyAuthToken from '../middleware/verifyAuth';
const router = express.Router();
router.get('/get', verifyAuthToken, getUsers);

router.get('/get/:id', verifyAuthToken, getUserById);

router.get('/getCustomers', verifyAuthToken, getCustomrs);
router.get('/getCustomers/:id', verifyAuthToken, getCustomrById);

router.post('/post', createUser);
router.post('/addBalance/:id', verifyAuthToken, addBalance);

export default router;
