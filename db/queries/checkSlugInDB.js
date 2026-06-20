import connection from "../db.js";

export async function checkSlugInDB(slug, table){
    const query = `
    SELECT slug, name 
        FROM ${table} 
        WHERE slug = ? 
        LIMIT 1;
    `;
    try{
        const [product] = await connection.execute(query, [slug]);
        if(product.length === 0){
            return {error:404, result:null};
        }
        return {error:null, result:product[0]};
    }
    catch (error){
        return {error:500, result:null};
    }
}

