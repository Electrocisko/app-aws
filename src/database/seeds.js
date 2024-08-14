import {addItem} from "./dynamo.js";
import {products} from "./data.js";

const seeds = () => {
    try {
        products.map( async(product) => {
            await addItem(product)
        })
    } catch (error) {
        console.log(error);
    }
}

export {seeds}