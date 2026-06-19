import { incorporateProducts } from "../../utils/mapping/incorporateProducts.js";
import connection from "../db.js"

export async function selectProductBySlug(slug){
    const query = `
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
    WHERE p.slug = ?
    `

    try{
        const [product] = await connection.execute(query, [slug]);
        const incorporatedProduct = incorporateProducts(product);
        return {error:null, result:incorporatedProduct};
    }
    catch(error){
        return{error:500, result:null};
    }
}