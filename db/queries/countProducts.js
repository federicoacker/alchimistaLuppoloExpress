import { incorporateProducts } from "../../utils/mapping/incorporateProducts.js";
import connection from "../db.js";
import { selectAllProducts } from "./selectAllProducts.js";

export async function countProducts(options){
    const {error, result} = await selectAllProducts(options, true, true, true);
    const count = result?.length;
    if(count === 0){
        return {error:404, result:0};
    }
    if(error === 500){
        return {error:500, result:null};
    }
    return {error:null, result:count};
}