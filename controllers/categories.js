import { createCategory } from "../db/queries/createCategory.js";
import { destroyCategory } from "../db/queries/destroyCategory.js";
import { selectAllCategories } from "../db/queries/selectAllCategories.js";
import { selectCategoryBySlug } from "../db/queries/selectCategoryBySlug.js";

const categoryController = {
    index,
    show,
    store,
    destroy
};

async function index(request, response){
    const {result, error} = await selectAllCategories();
    switch(error){
        case 404:
            return response.status(404).json({
                error:"Non sono state trovate categorie nel db",
                result: null
            });
        break;
        case 500:
            return response.status(500).json({
                error:"C'è stato un errore nel fetch delle categorie dal db",
                result:null
            });
    };

    return response.json({
        result:result,
        error:null
    });
}
async function show(request, response){
    const slug = request.categorySlug;
    const {result, error} = await selectCategoryBySlug(slug);
    switch(error){
        case 404:
            return response.status(404).json({
                error:"Non è stata trovata una categoria con quella slug",
                result: null
            });
        break;
        case 500:
            return response.status(500).json({
                error:"C'è stato un errore nel fetch della categoria dal db",
                result:null
            });
    }
    return response.json({
        result:result,
        error:null
    });
}
async function store(request, response){
    const {result, error} = await createCategory(request.validatedCategoryPayload);
    if(error === 500){
        return response.status(500).json({
            error:"C'è stato un errore nella creazione della categoria in db",
            result:null
        });
    }
    return response.json({
        error:null,
        result:result.insertId
    });
    
}
async function destroy(request, response){
    const slug = request.categorySlug;
    const {error, result} = await destroyCategory(slug);
    if(error === 500){
        return response.status(500).json({
            error:"C'è stato un'errore nella destroy della categoria",
            result: null
        });
    }
    return response.sendStatus(204);
}

export default categoryController;