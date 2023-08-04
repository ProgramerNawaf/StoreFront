import express from 'express';
import {
  getUsers,
  getUserById,
  createUser,
  addBalance,
  getCustomrs,
} from '../controller/userController';
import verifyAuthToken from '../middleware/verifyAuth';
const router = express.Router();
router.get('/get', getUsers);

router.get('/get/:id', getUserById);

router.get('/getCustomers', getCustomrs);

router.post('/post', createUser);
router.post('/addBalance/:id', verifyAuthToken, addBalance);

export default router;
