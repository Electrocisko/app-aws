import express from "express";
import {getProducts, addProduct, getProductById, deleteProductById,getProductByStyle } from "../controllers/productsController.js"

const router = express.Router();

router.get("/", getProducts);

router.get("/:sk", getProductById); 

router.get("/style/:style",getProductByStyle )

router.post("/", addProduct);

router.delete("/:id",deleteProductById )



export default router;