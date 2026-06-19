import { selectAllOrders } from "../db/queries/selectAllOrders.js";
import { selectOrderById } from "../db/queries/selectOrderById.js";
import { createOrder } from "../db/queries/createOrder.js";
import { deleteOrder } from "../db/queries/deleteOrder.js";

const orderController = {
    index,
    show,
    store,
    destroy
}

async function index(request, response) {
    const { status } = request.query;

    const { result: orders, error } = await selectAllOrders(status);

    switch (error) {
        case 404:
            return response.status(404).json({
                error: "Non sono stati trovati ordini",
                result: null
            });
        case 500:
            return response.status(500).json({
                error: "C'è stato un errore nel recuperare gli ordini dal db",
                result: null
            });
        default:
            break;
    }

    return response.json({
        error: null,
        result: orders
    });
}

async function show(request, response) {
    const { id } = request.params;

    const { result: order, error } = await selectOrderById(id);

    switch (error) {
        case 400:
            return response.status(400).json({
                error: "Id ordine non valido",
                result: null
            });
        case 404:
            return response.status(404).json({
                error: "Ordine non trovato",
                result: null
            });
        case 500:
            return response.status(500).json({
                error: "C'è stato un errore nel recuperare l'ordine dal db",
                result: null
            });
        default:
            break;
    }

    return response.json({
        error: null,
        result: order
    });
}

async function store(request, response) {
    const { result: orderId, error } = await createOrder(request.body);

    switch (error) {
        case 500:
            return response.status(500).json({
                error: "C'è stato un errore durante la creazione dell'ordine",
                result: null
            });
        default:
            break;
    }

    return response.status(201).json({
        error: null,
        result: {
            message: "Ordine creato correttamente",
            id: orderId
        }
    });
}

async function destroy(request, response) {
    const { id } = request.params;

    const { result, error } = await deleteOrder(id);

    switch (error) {
        case 400:
            return response.status(400).json({
                error: "Id ordine non valido",
                result: null
            });
        case 404:
            return response.status(404).json({
                error: "Ordine non trovato",
                result: null
            });
        case 500:
            return response.status(500).json({
                error: "C'è stato un errore durante l'eliminazione dell'ordine",
                result: null
            });
        default:
            break;
    }

    return response.json({
        error: null,
        result
    });
}

export default orderController;