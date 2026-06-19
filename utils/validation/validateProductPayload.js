import dataTypes from "../../db/dataTypes.js";
import { validateString } from "./validateString.js";




const validProductFields = new Set(
    [
    "name", 
    "description", 
    "short_description", 
    "origin", 
    "brewery", 
    "abv", 
    "image", 
    "serving_temp",
    "price",
    "ibu",
    "pairs_with",
    "suggested_glass",
    "ingredients",
    "size",
    "colour",
    "subtype",
    "categories"
    ]
);
const validCategoryFields = new Set(
    ["name", "slug"]
);

export function validateProductPayload(productPayload, isPatch = true){
    let errors=[];
    const productFieldsReceived = new Set(Object.getOwnPropertyNames(productPayload));
    const isValidProductFields = isPatch ? productFieldsReceived.isSubsetOf(validProductFields) : productFieldsReceived.isSupersetOf(validProductFields);
    const extraProductFields = productFieldsReceived.difference(validProductFields);
    const missingProductFields = isPatch ? [] : validProductFields.difference(productFieldsReceived);


    if(!isPatch && missingProductFields.size !== 0){
        errors.push(`Mancano le fields ${missingProductFields.join(" ")} al prodotto passato al server`);
    }
    if(extraProductFields.size !== 0){
        errors.push(`Ci sono fields extra nel prodotto passato al server: ${extraProductFields.join(" ")}`);
    }
    if(!isValidFields){
        errors.push(`Le fields inserite non corrispondono a quelle che si aspetta il server`);
    }

    for(const key of Object.getOwnPropertyNames(productPayload)){
        const validatorResult = switchValidator(key, productPayload);
        if(validatorResult){
            errors.push(validatorResult);
        }
    }

    return {result:reviewPayload, errors};
}

function switchValidator(key, productPayload){
    let result;
    switch(key){
        case "name":
            result = validateString(productPayload[key]);
            if(!result || productPayload[key].length > 254){
                return "Il nome inserito non è valido";
            }
            break;
        case "description":
            result = validateString(productPayload[key]);
            if(!result || productPayload[key].length > dataTypes.TEXT){
                return "La descrizione inserita non è valida";
            }
            break;
        case "short_description":
            result = validateString(productPayload[key]);
            
            break;
        case "origin":
            break;
        case "brewery":
            break;
        case "abv":
            break;
        case "image":
            break;
        case "serving_temp":
            break;
        case "price":
            break;
        case "ibu":
            break;
        case "pairs_with":
            break;
        case "suggested_glass":
            break;
        case "ingredients":
            break;
        case "size":
            break;
        case "colour":
            break;
        case "subtype":
            break;
        case "categories":
            break;
        default:
            break;
    }
}