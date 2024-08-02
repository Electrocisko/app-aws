import {getItems, getItemById, addItem} from "../database/dynamo.js"

 const getProducts = async (req,res) => {
    try {
        const data = await getItems();
        res.status(200).json({
            status: "success",
            payload: data
        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Error en obtener productos",
            error: error.message
          }); 
    }
}

const addProduct = async (req,res) => {
    try {
        const product = req.body;
        const response = await addItem(product);
        res.status(200).json({
            status:"success",
            payload: response
        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Error en obtener productos",
            error: error.message
          }); 
    }
}

const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await getItemById(id);
        res.status(200).json({
            status: "success",
            data
        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Error en obtener productos por id",
            error: error.message
          });
    }
}

export {
    getProducts,
    addProduct,
    getProductById
}