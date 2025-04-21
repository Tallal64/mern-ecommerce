import express from "express";
import {
  createProduct,
  getAllProducts,
  getProduct,
  deleteProducts,
  updateProduct,
} from "../controllers/product.controller.js";
import { upload } from "../middleware/multer.middleware.js";

const router = express.Router();

router.post("/", upload.single("image"), createProduct);
router.get("/", getAllProducts);
router.get("/:Id", getProduct);
router.delete("/:Id", deleteProducts);
router.put("/:Id", upload.single("image"), updateProduct);

export default router;
