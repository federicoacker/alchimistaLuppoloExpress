import connection from '../db/db.js';

async function index(request, response) {
    const { status } = request.query;

    // Query di base: recupera tutti gli ordini
    let sql = `
        SELECT *
        FROM orders
    `;

    // Array che conterrà eventuali parametri da passare alla query
    const params = [];

    // Aggiungo il filtro per status, se presente
    if (status) {
        sql += `
            WHERE status = ?
        `;

        params.push(status);
    }


    try {
        const [results] = await connection.query(sql, params);

        response.json(results);
    } catch (error) {
        response.status(500).json({
            error: 'Errore durante il recupero degli ordini'
        });
    }
}

async function show(request, response) {
    const { id } = request.params;

    if (isNaN(id)) {
        return response.status(400).json({
            error: 'Id ordine non valido'
        });
    }

    const sql = `
        SELECT *
        FROM orders
        WHERE id = ?
    `;

    try {
        const [results] = await connection.query(sql, [id]);

        if (results.length === 0) {
            return response.status(404).json({
                error: 'Ordine non trovato'
            });
        }

        response.json(results[0]);
    } catch (error) {
        response.status(500).json({
            error: 'Errore durante il recupero dell’ordine'
        });
    }
}

async function create(request, response) {
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
    } = request.body;

    const sql = `
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
        const [result] = await connection.query(sql, params);

        response.status(201).json({
            message: 'Ordine creato correttamente',
            id: result.insertId
        });
    } catch (error) {
        response.status(500).json({
            error: 'Errore durante la creazione dell’ordine'
        });
    }
}

export { index, show, create };