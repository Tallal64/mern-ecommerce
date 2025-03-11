import express from "express";
import {
  createProduct,
  deleteProducts,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";
import { upload } from "../middleware/multer.middleware.js";

const router = express.Router();

router.post("/", upload.single("image"), createProduct);
router.get("/", getProducts);
router.delete("/:Id", deleteProducts);
router.put("/:Id", upload.single("image"), updateProduct);

export default router;
