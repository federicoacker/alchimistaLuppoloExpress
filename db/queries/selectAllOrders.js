import connection from "../db.js";

export async function selectAllOrders(status) {

    let query = `
        SELECT *
        FROM orders
    `;

    const params = [];

    if (status) {
        query += `
            WHERE status = ?
        `;

        params.push(status);
    }

    try {
        const [orders] = await connection.query(query, params);
        if (orders.length === 0) {
            return { error: 404, result: null };
        }
        return { error: null, result: orders };
    }
    catch (error) {
        return { error: 500, result: null };
    }
}