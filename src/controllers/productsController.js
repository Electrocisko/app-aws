import {getProducts} from "../database/dynamo.js"




export const getAllProducts = async (req,res) => {
    try {
        const data = await getProducts();
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