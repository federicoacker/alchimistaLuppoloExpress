import connection from "../db/db.js";
import { checkSlugInDB } from "../db/queries/checkSlugInDB.js";
import { validateSlug } from "../utils/validation/validateSlug.js";

export async function checkCategorySlugExists(request, response, next){
    const validatedSlug = validateSlug(request.params.categorySlug);
    if(validatedSlug === null){
        return response.status(400).json({
            error:"Slug non valida",
            result:null
        });
    }

    const {result: product, error} = await checkSlugInDB(validatedSlug, "categories");
    switch(error){
        case 404:
            return response.status(404).json({
                error:"Categoria non trovata",
                result:null
            });
            break;
        case 500:
            return response.status(500).json({
                error:"Errore nel recuperare la categoria dal database",
                result:null
            });
            break;
        default:
            break;
    }

    request.categorySlug = validatedSlug;
    return next();
}