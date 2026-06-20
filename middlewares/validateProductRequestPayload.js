import { validateProductPayload } from "../utils/validation/validateProductPayload.js";

export async function validateProductRequestPayload(request, response, next){
    const requestPayload = request.body;
    const isPatch = request.method === "PATCH"
    const {result: validatedPayload, errors} = await validateProductPayload(requestPayload, isPatch);
    if(errors?.length > 0){
        return response.status(400).json({
            result:null,
            errors
        });
    }
    request.validatedProductPayload = validatedPayload;
    next();
}