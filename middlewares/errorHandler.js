export function errorHandler(error, request, response, next){
    const status = error.status || 500;
    const message = error.massage || "Errore interno del server";

    if (status >= 500) {
        console.error(error);
    }

    return response.status(status).json({
        error: error,
        result: null
    })
}