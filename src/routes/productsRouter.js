import express from "express";
import {getProducts, addProduct, getProductById} from "../controllers/productsController.js"

const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getProductById); 

router.post("/", addProduct)



export default router;