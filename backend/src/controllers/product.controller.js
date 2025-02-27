import Product from "../models/product.model.js";
import {
  validateProduct,
  validateProductUpdate,
} from "../validators/product.validator.js";

export const getProducts = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const products = await Product.find()
      .skip((page - 1) * limit)
      .limit(Number(limit));
    const totalProducts = await Product.countDocuments();
    res.json({
      products,
      totalPages: Math.ceil(totalProducts / limit),
      currentPage: Number(page),
      limit: Number(limit),
    });
  } catch (error) {
    console.error("Error getting products: ", error);
    res.status(500).json({ message: "Error getting products" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const validation = validateProduct(req.body);

    if (!validation.valid) {
      return res.status(400).json({ message: validation.message });
    }

    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error("Error creating product: ", error);
    res.status(500).json({ message: "Error creating product" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const validation = validateProductUpdate(req.body);

    if (!validation.valid) {
      return res.status(400).json({ message: validation.message });
    }

    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(product);
  } catch (error) {
    console.error("Error updating product: ", error);
    res.status(500).json({ message: "Error updating product" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({ message: "Product deleted" });
  } catch (error) {
    console.error("Error deleting product: ", error);
    res.status(500).json({ message: "Error deleting product" });
  }
};
