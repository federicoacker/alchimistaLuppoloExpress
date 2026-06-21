import connection from "../db.js"

export async function destroyCategory(categorySlug){
    const destroyQuery = `
    DELETE FROM categories WHERE slug = ?
    LIMIT 1;
    `
    try{
        const [result] = await connection.execute(destroyQuery, [categorySlug]);
        return {result:result, error:null};
    }
    catch(error){
        return {result:null, error:500};
    }
}