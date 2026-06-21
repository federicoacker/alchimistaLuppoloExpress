import connection from "../db.js";

export async function selectCategoryBySlug(slug){
    const selectQuery = `
    SELECT slug, name, short_description
    FROM categories
    WHERE slug = ?;`;

    try{
        const [result] = await connection.execute(selectQuery, [slug]);
        if(result.length === 0){
            return {error:404, result:null};
        }
        return {error:null, result:result[0]};
    }
    catch(error){
        return {error:500, result:null};
    }
}