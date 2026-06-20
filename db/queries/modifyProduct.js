import connection from "../db.js";
import { checkSlugInDB } from "./checkSlugInDB.js";
import { findCategoryProductIds } from "./createProduct.js";
import { linkCategoryProducts } from "./createProduct.js";

export async function modifyProduct(slug, productPayload) {
    const fields = Object.getOwnPropertyNames(productPayload);
    const values = Object.values(productPayload);

    const setString = fields.filter(field => field !== "categories").map(field => `${field} = ?`).join(", ");
    values.push(slug);

    const finalizedQuery = `
    UPDATE products SET ${setString} WHERE slug = ?
    `;
    try {
        const [result] = await connection.execute(finalizedQuery, values);
        const categories = productPayload?.categories;
        return { error: null, result: "Entry modificata con successo" };
    } catch (error) {
        console.log(error);
        return { error: 500, result: null };
    }


}