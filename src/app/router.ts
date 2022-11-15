import { Router } from "express";
import { createCategory } from "./useCases/categories/createCategory";
import { listCategories } from "./useCases/categories/listCategory";

export const router = Router();

// List Categories
router.get("/categories", listCategories);

//Create Categories
router.post("/categories", createCategory);

//List Products
router.get("/products", (req, res) => {
  res.send("OK");
});

//Create products
router.post("/products", (req, res) => {
  res.send("OK");
});

//Get products by category
router.get("/categories/:categoryId/products", (req, res) => {
  res.send("OK");
});

//List orders
router.get("/orders", (req, res) => {
  res.send("OK");
});

//Create order
router.post("/orders", (req, res) => {
  res.send("OK");
});

//Change order status
router.patch("/orders/:orderId", (req, res) => {
  res.send("OK");
});

//Delete/cancel order
router.delete("/orders/:orderId", (req, res) => {
  res.send("OK");
});
