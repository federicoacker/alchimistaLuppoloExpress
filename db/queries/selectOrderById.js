import connection from "../db.js";
import { validateNumber } from "../../utils/validation/validateNumber.js";

export async function selectOrderById(id) {
    const validatedId = validateNumber(id);

    if (validatedId === null) {
        return { error: 400, result: null };
    }

    const query = `
        SELECT *
        FROM orders
        WHERE id = ?
    `;

    try {
        const [order] = await connection.execute(query, [validatedId]);
        if (order.length === 0) {
            return { error: 404, result: null };
        }
        return { error: null, result: order[0] };
    }
    catch (error) {
        return { error: 500, result: null };
    }
}