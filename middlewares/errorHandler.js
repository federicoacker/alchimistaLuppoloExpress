import MyError from "../utils/errors/MyError.js";
export function errorHandler(error, request, response, next){
    const status = error.status || 500;
    const message = error.message || "Errore interno del server";
    console.error(error);
    if(error instanceof MyError){
        return response.status(error.getCode()).json({
            error: {
                code: error.getCode(),
                message: error.message
            }
        });
    }
    return response.status(status).json({
        error: error,
        result: null
    })
}