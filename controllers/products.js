import { selectAllProducts } from "../db/queries/selectAllProducts.js";
import { selectProductBySlug } from "../db/queries/selectProductBySlug.js";

const productController = {
    index,
    show,
    store,
    modify,
    destroy
}

async function index(request, response) {
    const {result : products, error} = await selectAllProducts();
    switch(error){
        case 404:
            return response.status(404).json({
                error:"Non sono stati trovati prodotti",
                result:null
            });
            break;
        case 500:
            return response.status(500).json({
                error:"C'è stato un errore nel recuperare i dati dei prodotti dal db",
                result:null
            }); 
            break;
        default:
            break;
    }
    return response.json({
        error:null,
        result:products
    });
}

async function show(request, response) {
    const {result: product, error} = await selectProductBySlug(request.productSlug);

    if(error === 500){
        return response.status(500).json({
            error:`C'è stato un errore nel recuperare i dati del prodotto ${request.validatedSlug}`,
            result:null
        });
    }
    return response.json({
        error:null,
        result:product[0]
    });
}

function store(request, response) {

}

function modify(request, response) {

}

function destroy(request, response) {

}

export default productController;