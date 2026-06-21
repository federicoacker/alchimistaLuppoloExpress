import connection from "../db.js";

export async function getProductCount(request, response) {
    const countQuery = `
    SELECT COUNT(id)
    FROM products;
    `;

    try{
        const [count] = await connection.query(countQuery);
        const realCount = count[0]["COUNT(id)"];

        if(realCount === 0){
            return {
                error:404,
                result:null
            }
        }

        return {
            result:count[0]["COUNT(id)"],
            error:null
        };
    }
    catch(sqlError){
        return {
            error:500,
            result:null
        };

    }
}