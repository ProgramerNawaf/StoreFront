import express from "express";
import {
  getProduct,
  postProduct,
  deleteProduct,
  updateProduct,
  getProductById,
} from "../controller/productController";

const router = express.Router();
router.get("/get", getProduct);

router.get("/get/:id", getProductById);

router.post("/post", postProduct);

router.delete("/delete/:id", deleteProduct);

router.put("/update/:id", updateProduct);

export default router;
