import connection from "../db.js";
import sendMail from "../../utils/sendMail.js";
import { validateOrderPayload } from "../../utils/validation/validateOrderPayload.js";

export async function createOrder(orderPayload) {
    const { result: validatedOrder, errors } = validateOrderPayload(orderPayload, false);

    if (errors.length !== 0) {
        return { error: 400, result: errors };
    }

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
        status,
        products
    } = validatedOrder;

    try {
        await connection.beginTransaction();

        const createOrderQuery = `
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

        const createOrderParams = [
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

        const [orderResult] = await connection.execute(createOrderQuery, createOrderParams);

        const orderId = orderResult.insertId;

        for (const product of products) {
            const selectProductQuery = `
                SELECT id, price
                FROM products
                WHERE slug = ?
            `;

            const [productResult] = await connection.execute(selectProductQuery, [product.product_slug]);

            if (productResult.length === 0) {
                await connection.rollback();

                return {
                    error: 404,
                    result: `Prodotto ${product.product_slug} non trovato`
                };
            }

            const selectedProduct = productResult[0];

            const createOrderProductQuery = `
                INSERT INTO order_product (
                    product_id,
                    order_id,
                    product_price,
                    quantity
                )
                VALUES (?, ?, ?, ?)
            `;

            const createOrderProductParams = [
                selectedProduct.id,
                orderId,
                selectedProduct.price,
                product.quantity
            ];

            await connection.execute(createOrderProductQuery, createOrderProductParams);
        }
        await connection.commit();
        await sendMail({orderId, email, products});
        return {
            error: null,
            result: orderId
        };
    }
    catch (error) {
        console.log(error);
        await connection.rollback();
        return {
            error: 500,
            result: null
        };
    }
}