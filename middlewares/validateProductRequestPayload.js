import { validateProductPayload } from "../utils/validation/validateProductPayload.js";

export function validateProductRequestPayload(request, response, next){
    const requestPayload = request.body;
    const {result: validatedPayload, errors} = validateProductPayload(requestPayload);
    if(errors.length > 0){
        return response.status(400).json({
            result:null,
            errors
        });
    }
    request.validatedProductPayload = validatedPayload;
    next();
}