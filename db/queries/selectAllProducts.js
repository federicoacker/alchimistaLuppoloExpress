import { incorporateProducts } from "../../utils/mapping/incorporateProducts.js";
import connection from "../db.js";

export async function selectAllProducts(options){
    const {
        validatedOrderBy,
        validatedOrder,
        validatedOffset,
        validatedLimit,
        validatedCategory,
        validatedSearch
    } = options || {};
    let whereString = `WHERE 1 `;
    let orderString = "";
    let offsetString = "OFFSET 0";
    let limitString = "LIMIT 10";
    
    if(validatedSearch){
        whereString += `AND (p.name LIKE "%${validatedSearch}%" or p.description LIKE "%${validatedSearch}%") `;
    }
    if(validatedCategory){
        whereString += `AND c.slug = "${validatedCategory}" `;
    }
    if(validatedOrderBy){
        orderString = `ORDER BY ${validatedOrderBy}`
        if(validatedOrder){
            orderString += ` ${validatedOrder}`;
        }
        else {
            orderString += ` asc`;
        }
    }
    if(validatedOffset){
        offsetString = `OFFSET ${validatedOffset}`;
    }
    if(validatedLimit){
        limitString = `LIMIT ${validatedLimit}`;
    }



    const query=`
    SELECT 
        p.slug,
        p.name, 
        p.description, 
        p.short_description,
        p.origin,
        p.brewery, 
        p.abv,
        p.image,
        p.serving_temp,
        p.price,
        p.updated_at,
        p.created_at,
        p.ibu,
        p.pairs_with,
        p.suggested_glass,
        p.ingredients,
        p.size,
        c.name as category_name,
        c.slug as category_slug
    FROM products as p
    JOIN category_product as cp
        ON cp.product_id = p.id
    JOIN categories as c 
        ON cp.category_id = c.id
    ${whereString}
    ${orderString}
    ${limitString} ${offsetString};
    `;
    try{
        const [products] = await connection.query(query);
        if(products.length === 0){
            return {error:404, result:null};
        }
        const incorporatedProducts = incorporateProducts(products);
        return {error:null, result:incorporatedProducts};
    }
    catch(error){
        return {error:500, result: null};
    }
}