import createSlug from "../../utils/createSlug.js";
import connection from "../db.js";

export async function createCategory(categoryPayload){
    const insertCategoryQuery = `
    INSERT INTO categories(name,short_description,slug)
    VALUES (?, ?, ?);`;

    const{
        name,
        short_description
    } = categoryPayload;

    try{
        const createdSlug = await createSlug(name, "categories");
        categoryPayload.slug = createdSlug;
        const [creationResults] = await connection.execute(insertCategoryQuery, [name, short_description, createdSlug]);

        return {error:null, result:creationResults};
    }
    catch(error){
        return{error:500, result:null};
    }
}