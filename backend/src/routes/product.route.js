import express from "express";
import {
  createProduct,
  deleteProducts,
  getProducts,
  updateProducts,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.delete("/:Id", deleteProducts);
router.put("/:Id", updateProducts);

export default router;
