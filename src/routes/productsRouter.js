import express from "express";
import {getProducts, addProduct, getProductById, deleteProductById} from "../controllers/productsController.js"

const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getProductById); 

router.post("/", addProduct);

router.delete("/:id",deleteProductById )



export default router;