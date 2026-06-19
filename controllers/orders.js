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


export { index, show };