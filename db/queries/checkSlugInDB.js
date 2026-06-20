import connection from "../db.js";

export async function checkSlugInDB(slug, table){
    const query = `
    SELECT slug 
        FROM ? 
        WHERE slug = ? 
        LIMIT 1;
    `;
    try{
        console.log(table, slug);
        const [product] = await connection.execute(query, [table, slug]);
        if(product.length === 0){
            return {error:404, result:null};
        }
        return {error:null, result:product[0]};
    }
    catch (error){
        console.log(error);
        return {error:500, result:null};
    }
}
