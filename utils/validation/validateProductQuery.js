import { getProductCount } from "../../db/queries/getProductCount.js";
import { selectAllCategories } from "../../db/queries/selectAllCategories.js";
import {validateString} from "./validateString.js";
import { validateNumber } from "./validateNumber.js";
import dataTypes from "../../db/dataTypes.js";


export async function validateProductQuery(queryObject){
    let errors = [];
    const keys = Object.getOwnPropertyNames(queryObject);
    if(keys.length === 0){
        return{result:{}, errors:[]};
    }

    const acceptedOrderBys = [
        "created_at", 
        "updated_at", 
        "name", 
        "category_slug", 
        "origin", 
        "brewery",
        "price",
        "ibu",
        "abv",
        "size"
    ]
    const acceptedOrders = ["asc", "desc"];

    const {result : categoryList, error: categoryError} = await selectAllCategories();
    if(categoryError){
        errors.push("C'è stato un problema nel fetch delle categorie");
    }
    const {result : count, error: countError} = await getProductCount();
    if(countError === 404){
        errors.push("Non ci sono prodotti in db");
    }
    if(countError === 500){
        errors.push("C'è stato un problema nel fetch del numero di prodotti");
    }

    const acceptedCategories = categoryList?.map(category => category.slug.toLowerCase());

    let validatedOrderBy;
    let validatedOrder;
    let validatedOffset;
    let validatedCategory;
    let validatedSearch;
    let validatedLimit;
    let validatedBrewery;

    for(const key of keys){
        switch(key){
            case "orderBy":
                validatedOrderBy = validateString(queryObject["orderBy"]);
                if(!validatedOrderBy || !acceptedOrderBys.includes(validatedOrderBy.toLowerCase())){
                    errors.push("Il valore inserito in orderBy è errato");
                }
                break;
            case "order":
                validatedOrder = validateString(queryObject["order"]);
                if(!validatedOrder || !acceptedOrders.includes(validatedOrder.toLowerCase())){
                    errors.push("Il valore inserito in order non è valido");
                }
                break;
            case "offset":
                validatedOffset = validateNumber(queryObject["offset"]);
                if(validatedOffset === null || validatedOffset > count || validatedOffset < 0){
                    errors.push("Il valore inserito per l'offset non è valido");
                }
                break;
            case "category":
                validatedCategory = validateString(queryObject["category"].toLowerCase());
                if(validatedCategory === "any"){
                    validatedCategory = undefined;
                    break;
                }
                if(!validatedCategory || !acceptedCategories.includes(validatedCategory)){
                    errors.push("Il valore inserito in category è errato");
                }
                break;
            case "search":
                if(queryObject["search"].length === 0){
                    validatedSearch = undefined;
                    break;
                }
                validatedSearch = validateString(queryObject["search"].toLowerCase());
                if(!validatedSearch){
                    errors.push("Il valore inserito in search è errato");
                }
                break;
            case "limit":
                validatedLimit = validateNumber(queryObject["limit"]);
                if(validatedLimit === null || validatedLimit > 10 || validatedLimit < 0){
                    errors.push("Il valore inserito in limit non è valido");
                }
                break;
            case "brewery":
                validatedBrewery = validateString(queryObject["brewery"]);
                if(!validatedBrewery || validatedBrewery.length > dataTypes.VARCHAR_255 ){
                    errors.push("Il valore inserito per brewery non è valido");
                }
                break;
            default:
                errors.push(`La chiave ${key} non è un parametro di query accettato`);
                break;
        }
    }

    const validatedQueryObject = {
        validatedOrderBy,
        validatedOrder,
        validatedOffset,
        validatedLimit,
        validatedCategory,
        validatedSearch,
        validatedBrewery
    }

    if(errors.length > 0){
        return {result:{}, errors};
    }
    
    return {result:validatedQueryObject, errors: []};
}