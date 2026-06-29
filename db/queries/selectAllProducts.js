import { incorporateProducts } from "../../utils/mapping/incorporateProducts.js";
import connection from "../db.js";

export async function selectAllProducts(options = {}, noLimit = false, noOffset = false, isCount = false){
    const {
        validatedOrderBy,
        validatedOrder,
        validatedOffset,
        validatedLimit,
        validatedCategory,
        validatedSearch,
        validatedBrewery,
        validatedExcludedBrewery
    } = options;
    let whereString = `WHERE 1 `;
    let orderString = "";
    let offsetString = "";
    let limitString = "";
    
    if(validatedSearch){
        whereString += `AND (p.name LIKE "%${validatedSearch}%" or p.description LIKE "%${validatedSearch}%") `;
    }
    if(validatedCategory && validatedCategory.length !== 0){
        whereString += `AND (c.slug = "${validatedCategory[0]}" `
        if(validatedCategory.length === 1){
            whereString += ")";
        }
        else if (validatedCategory.length > 1) {
            for(let i = 1; i<validatedCategory.length; i++){
                whereString +=`OR c.slug = "${validatedCategory[i]}" `
            }
            whereString += ")";
        }
    }
    if(validatedBrewery){
        whereString += `AND p.brewery = "${validatedBrewery}" `;
    }
    if(validatedExcludedBrewery){
        whereString += `AND NOT p.brewery = "${validatedExcludedBrewery}" `;
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
    if(validatedOffset && !noOffset){
        offsetString = `OFFSET ${validatedOffset}`;
    }
    if(validatedLimit && !noLimit){
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
        p.colour,
        p.subtype,
        c.name as category_name,
        c.slug as category_slug
    FROM products as p
    JOIN category_product as cp
        ON cp.product_id = p.id
    JOIN categories as c 
        ON cp.category_id = c.id
    ${whereString}
    ${orderString}
    ;
    `;

    try{
        const [products] = await connection.query(query);
        if(products.length === 0){
            return {error:404, result:null};
        }
        const incorporatedProducts = incorporateProducts(products, validatedLimit, validatedOffset, isCount);
        return {error:null, result:incorporatedProducts};
    }
    catch(error){
        return {error:500, result: null};
    }
}