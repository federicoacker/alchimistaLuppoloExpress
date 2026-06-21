import { validateCategoryPayload } from "../utils/validation/validateCategoryPayload.js";

export async function validateCategoryRequestPayload(request, response, next){
    const categoryPayload = request.body || {};
    const isPatch = request.method === "PATCH";
    const {result: validatedCategoryPayload, errors} = await validateCategoryPayload(categoryPayload, isPatch);
    if(errors?.length > 0){
        return response.status(400).json({
            result:null,
            errors
        });
    }
    request.validatedCategoryPayload = validatedCategoryPayload;
    next();
}

