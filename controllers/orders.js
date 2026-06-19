import connection from '../db/connection.js';

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

export { index };