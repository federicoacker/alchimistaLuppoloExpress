import connection from "../db.js";

export async function checkSlugInDB(slug, table){
    const query = `
    SELECT slug, name 
        FROM ${table} 
        WHERE slug = ? 
        LIMIT 1;
    `;
    try{
        const [results] = await connection.execute(query, [slug]);
        if(results.length === 0){
            console.log("test");
            return {error:404, result:null};
        }
        return {error:null, result:results[0]};
    }
    catch (error){
        return {error:500, result:null};
    }
}

