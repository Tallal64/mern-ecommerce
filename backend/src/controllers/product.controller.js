import mongoose from "mongoose";
import { Product } from "../models/product.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const createProduct = async (req, res) => {
  const product = req.body;

  if (!product.title || !product.price) {
    return res
      .status(401)
      .json({ success: false, message: "All the fields are required" });
  }

  try {
    const imageLocalPath = req.file?.path;

    if (!imageLocalPath) {
      return res.status(400).json({
        success: false,
        message: "Image file is required",
      });
    }

    const productImage = await uploadOnCloudinary(imageLocalPath);

    if (!productImage) {
      return res.status(500).json({
        success: false,
        message: "Error while uploading the image to Cloudinary",
      });
    }

    const productData = await Product.create({
      ...product,
      image: productImage.url,
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: productData,
    });
  } catch (error) {
    console.error("server error", error);
    res
      .status(401)
      .json({ success: false, message: "error when creating a product" });
  }
};

export const getProducts = async (_, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "error when getting the products" || error.message,
    });
  }
};

export const deleteProducts = async (req, res) => {
  const { Id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(Id)) {
    return res
      .status(400)
      .json({ success: false, message: "invalid product Id" });
  }

  try {
    const existedProduct = await Product.findById(Id);
    if (!existedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "the product doesn't exists" });
    }

    await Product.findByIdAndDelete(Id);
    res
      .status(200)
      .json({ success: true, message: "product deleted successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        error.message || "something went wrong when deleting the product",
    });
  }
};

export const updateProduct = async (req, res) => {
  const { Id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(Id)) {
    return res
      .status(401)
      .json({ success: false, message: "invalid product Id" });
  }

  try {
    const existedProduct = await Product.findById(Id);
    if (!existedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "the product doesn't exists" });
    }

    if (req.file) {
      const updateImageLocalPath = req.file.path;
      const updatedProductImage = await uploadOnCloudinary(
        updateImageLocalPath
      );

      if (!updatedProductImage?.url) {
        return res
          .status(400)
          .json({ success: false, message: "error while updating the image" });
      }
      product.image = updatedProductImage.url;
    }

    await Product.findByIdAndUpdate(Id, product, { new: true });

    res.status(200).json({
      success: true,
      message: "product updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "error while updating product",
    });
  }
};
