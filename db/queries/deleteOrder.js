import connection from "../db.js";
import { validateNumber } from "../../utils/validation/validateNumber.js";

export async function deleteOrder(id) {
    const validatedId = validateNumber(id);

    if (validatedId === null) {
        return { error: 400, result: null };
    }

    const query = `
    UPDATE orders
    SET deleted = 1
    WHERE id = ?
    `;

    try {
        const [result] = await connection.execute(query, [validatedId]);
        if (result.affectedRows === 0) {
            return { error: 404, result: null };
        }
        return {
            error: null,
            result: {
                message: "Ordine eliminato correttamente"
            }
        };
    }
    catch (error) {
        return { error: 500, result: null };
    }
}