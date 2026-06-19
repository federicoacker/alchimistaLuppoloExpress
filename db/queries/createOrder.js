import connection from "../db.js";

export async function createOrder(orderPayload) {
    const {
        first_name,
        last_name,
        city,
        address_line_1,
        postal_code,
        email,
        phone,
        date_of_birth,
        total_price,
        shipping_price,
        products_price,
        status
    } = orderPayload;

    const query = `
        INSERT INTO orders (
            first_name,
            last_name,
            city,
            address_line_1,
            postal_code,
            email,
            phone,
            date_of_birth,
            total_price,
            shipping_price,
            products_price,
            status
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const params = [
        first_name,
        last_name,
        city,
        address_line_1,
        postal_code,
        email,
        phone,
        date_of_birth,
        total_price,
        shipping_price,
        products_price,
        status
    ];

    try {
        const [result] = await connection.execute(query, params);
        return { error: null, result: result.insertId };
    }
    catch (error) {
        return { error: 500, result: null };
    }
}