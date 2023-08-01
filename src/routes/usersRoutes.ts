
import express from "express";
import {
    getUsers,
    getUserById,
    createUser
} from "../controller/userController";

const router = express.Router();
router.get("/get", getUsers);

router.get("/get/:id", getUserById);

router.post("/post", createUser);





export default router;



