import { validateProductQuery } from "../utils/validation/validateProductQuery.js"

export async function validatedProductQueryRequest(request, response, next){
    const {result: validatedQuery, errors} = await validateProductQuery(request.query || {});

    if(errors.length > 0){
        return response.status(400).json({
            result:null,
            errors
        })
    }
    console.log(validatedQuery);
    request.validatedQuery = validatedQuery;
    next();
}