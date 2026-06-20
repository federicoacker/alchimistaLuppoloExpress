import dataTypes from "../../db/dataTypes.js";
import { validateArray } from "./validateArray.js";
import { validateString } from "./validateString.js";
import { validateNumber } from "./validateNumber.js";
import { validateFloatNumber } from "./validateFloatNumber.js";
import { checkSlugInDB } from "../../db/queries/checkSlugInDB.js";




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

export async function validateProductPayload(productPayload, isPatch = false) {
    let errors = [];
    const productFieldsReceived = new Set(Object.getOwnPropertyNames(productPayload));
    const isValidProductFields = isPatch ? productFieldsReceived.isSubsetOf(validProductFields) : productFieldsReceived.isSupersetOf(validProductFields);
    const extraProductFields = productFieldsReceived.difference(validProductFields);
    const missingProductFields = isPatch ? [] : validProductFields.difference(productFieldsReceived);


    if (!isPatch && missingProductFields.size !== 0) {
        errors.push(`Mancano le fields ${Array.from(missingProductFields).join(" ")} al prodotto passato al server`);
    }
    if (extraProductFields.size !== 0) {
        errors.push(`Ci sono fields extra nel prodotto passato al server: ${Array.from(extraProductFields).join(" ")}`);
    }
    if (!isValidProductFields) {
        errors.push(`Le fields inserite non corrispondono a quelle che si aspetta il server`);
    }

    for (const key of Object.getOwnPropertyNames(productPayload)) {
        const validatorResult = await switchValidator(key, productPayload);
        if (validatorResult) {
            errors.push(validatorResult);
        }
    }

    return { result: productPayload, errors };
}

async function switchValidator(key, productPayload) {
    let result;
    switch (key) {
        case "name":
            result = validateString(productPayload[key]);
            if (!result || result.length > dataTypes.VARCHAR_255) {
                return "Il nome inserito non è valido";
            }
            break;
        case "description":
            result = validateString(productPayload[key]);
            if (!result || result.length > dataTypes.TEXT) {
                return "La descrizione inserita non è valida";
            }
            break;
        case "short_description":
            result = validateString(productPayload[key]);
            if (!result || result.length > dataTypes.VARCHAR_255) {
                return "La short description inserita non è valida"
            }
            break;
        case "origin":
            result = validateString(productPayload[key]);
            if (!result || result.length > dataTypes.VARCHAR_255) {
                return "L'origine inserita non è valida";
            }
            break;
        case "brewery":
            result = validateString(productPayload[key])
            if (!result || result.length > dataTypes.VARCHAR_255) {
                return "La brewery inserita non è valida";
            }
            break;
        case "abv":
            result = validateFloatNumber(productPayload[key])
            if (result === null || result > dataTypes.TINY_INT) {
                return "L'abv inserito non è valido";
            }
            break;
        case "image":
            result = validateString(productPayload[key])
            if (!result || result.length > dataTypes.VARCHAR_255) {
                return "L'immagine inserita non è valida";
            }
            break;
        case "serving_temp":
            result = validateString(productPayload[key])
            if (!result || result.length > dataTypes.VARCHAR_255) {
                return "La temperatura di servizio inserita non è valida";
            }
            break;
        case "price":
            result = validateFloatNumber(productPayload[key]);
            if (result === null || result > dataTypes.DECIMAL) {
                return "Il prezzo inserito non è valido";
            }
            break;
        case "ibu":
            result = validateNumber(productPayload[key]);
            if (result === null || result > dataTypes.TINY_INT) {
                return "La ibu inserita non è valida";
            }
            break;
        case "pairs_with":
            result = validateString(productPayload[key]);
            if (!result || result.length > dataTypes.TEXT) {
                return "I piatti di accoppiamento inseriti non sono valdi";
            }
            break;
        case "suggested_glass":
            result = validateString(productPayload[key]);
            if (!result || result.length > dataTypes.VARCHAR_100) {
                return "Il bicchiere consigliato inserito non è valido";
            }
            break;
        case "ingredients":
            result = validateString(productPayload[key]);
            if (!result || result.length > dataTypes.TEXT) {
                return "Gli ingredienti inseriti non sono validi";
            }
            break;
        case "size":
            result = validateString(productPayload[key]);
            if (!result || !dataTypes.SIZE.includes(result)) {
                return "La dimensione inserita non è valida";
            }
            break;
        case "colour":
            result = validateString(productPayload[key]);
            if (!result || !dataTypes.COLOUR.includes(result)) {
                return "Il colore inserito non è valido";
            }
            break;
        case "subtype":
            result = validateString(productPayload[key]);
            if (!result || result.length > dataTypes.VARCHAR_100) {
                return "Il sotto-tipo inserito non è valido";
            }
            break;
        case "categories":
            const { array, error } = await validateArray(productPayload[key], categoryValidator);
            if (error?.length > 0) {
                return `C'è stato un errore nell'inserimento delle categorie per il prodotto:\n${error}`;
            }
            break;
        default:
            break;
    }
}

async function categoryValidator(categoryObject) {
    let {result, error} = await checkSlugInDB(categoryObject.slug, "categories");
    if(error === 500){
        return "C'è stato un errore nel recuperare le categorie in db per validare il prodotto";
    }
    if(error === 404){
        return `La categoria ${categoryObject.name} non esiste in db`;
    }
    return null;
}