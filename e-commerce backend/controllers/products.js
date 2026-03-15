import { TryCatch } from "../middlewares/error.js";
import { Product } from "../models/products.js";
import ErrorHandler from "../utils/utility-class.js";
import { rm } from "fs";

export const newProduct = TryCatch(async (req, res, next) => {
  const { name, price, stock, category } = req.body;
  const photo = req.file;

  if (!photo) return next(new ErrorHandler("Please add Photo", 400));

  if (!name || !price || !category || !stock) {
    rm(photo.path, () => {
      console.log("Deleted file because of missing form fields");
    });
    return next(new ErrorHandler("Please enter all fields", 400));
  }

  await Product.create({
    name,
    category: category.toLowerCase(),
    stock,
    price,
    photo: photo.path,
  });

  return res.status(201).json({
    success: true,
    message: "Product Created Successfully",
  });
});

export const getlatestProducts = TryCatch(async (req, res, next) => {
  const products = await Product.find({}).sort({ createdAt: -1 }).limit(5);
  return res.status(200).json({
    success: true,
    products,
  });
});

export const getuniqueCategories = TryCatch(async (req, res, next) => {
  const categories = await Product.distinct("category");
  return res.status(200).json({
    success: true,
    categories,
  });
});

export const getadminProduct = TryCatch(async (req, res, next) => {
  const products = await Product.find({});
  return res.status(200).json({
    success: true,
    products,
  });
});

export const getsingleProduct = TryCatch(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) return next(new ErrorHandler("Product Not Found", 404));

  return res.status(200).json({
    success: true,
    product,
  });
});

export const updateProduct = TryCatch(async (req, res, next) => {
  const { id } = req.params;
  const { name, price, stock, category, description } = req.body;
  const photo = req.file;

  const product = await Product.findById(id);
  if (!product) return next(new ErrorHandler("Product Not Found", 404));

  if (photo) {
    rm(product.photo, () => {
      console.log("Deleted Old Photo");
    });
    product.photo = photo.path;
  }

  if (name) product.name = name;
  if (price) product.price = price;
  if (stock) product.stock = stock;
  if (category) product.category = category;
  if (description) product.description = description;

  await product.save();

  return res.status(200).json({
    success: true,
    message: "Product Updated Successfully",
  });
});

export const deleteProduct = TryCatch(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) return next(new ErrorHandler("Product Not Found", 404));

  if (product.photo) {
    rm(product.photo, () => {
      console.log("Deleted Old Photo");
    });
  }

  await product.deleteOne();

  return res.status(200).json({
    success: true,
    message: "Product Deleted Successfully",
  });
});