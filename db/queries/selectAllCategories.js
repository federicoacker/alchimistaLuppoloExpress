import connection from "../db.js";

export async function selectAllCategories(){
    const selectQuery = `
    SELECT slug, name, short_description
    FROM categories;
    `;
    try{
        const results = await connection.execute(selectQuery);
        if(results[0].length === 0){
            return {result: null, error:404};
        } 
        return {result:results[0], error:null};
    }
    catch(error){
        return{result:null, error:500};
    }
}