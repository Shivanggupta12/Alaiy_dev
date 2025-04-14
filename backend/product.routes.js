import express from "express";
import { addProduct, deleteProduct, getProduct, updateProduct } from "./product.controller.js";
const router= express.Router();

router.get("/",getProduct);
router.put("/:id",updateProduct);
router.post("/", addProduct);
router.delete("/:id",deleteProduct);

export default router;