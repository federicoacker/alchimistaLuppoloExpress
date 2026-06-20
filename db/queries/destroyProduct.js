import connection from "../db.js"

export async function destroyProduct(productSlug){
    const destroyQuery = `
    DELETE FROM products WHERE slug = ?
    LIMIT 1;
    `
    try{
        const [result] = await connection.execute(destroyQuery, [productSlug]);
        return {result:result, error:null};
    }
    catch(error){
        return {result:null, error:500};
    }
}