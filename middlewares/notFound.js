export function notFound(request, response, next) {
    const error = new Error("Risorsa non trovata");
    error.status = 404
    next(error);
}