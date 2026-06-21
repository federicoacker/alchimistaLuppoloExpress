import dataTypes from "../../db/dataTypes.js";
import { validateString } from "./validateString.js";

const validCategoryFields = new Set(
    [
        "name",
        "short_description",
    ]
);


export async function validateCategoryPayload(categoryPayload, isPatch = false) {
    let errors = [];
    const categoryFieldsReceived = new Set(Object.getOwnPropertyNames(categoryPayload));
    const isValidCategoryFields = isPatch ? categoryFieldsReceived.isSubsetOf(validCategoryFields) : categoryFieldsReceived.isSupersetOf(validCategoryFields);
    const extraCategoryFields = categoryFieldsReceived.difference(validCategoryFields);
    const missingCategoryFields = isPatch ? [] : validCategoryFields.difference(categoryFieldsReceived);

    if(categoryFieldsReceived.size === 0){
        errors.push("Non sono state passate fields");
    }
    if (!isPatch && missingCategoryFields.size !== 0) {
        errors.push(`Mancano le fields [${Array.from(missingCategoryFields).join(", ")}] alla categoria passata al server`);
    }
    if (extraCategoryFields.size !== 0) {
        errors.push(`Ci sono fields extra nella categoria passata al server: ${Array.from(extraCategoryFields).join(" ")}`);
    }
    if (!isValidCategoryFields) {
        errors.push(`Le fields inserite non corrispondono a quelle che si aspetta il server`);
    }

    for (const key of Object.getOwnPropertyNames(categoryPayload)) {
        const validatorResult = await switchValidator(key, categoryPayload);
        if (validatorResult) {
            errors.push(validatorResult);
        }
    }

    return { result: categoryPayload, errors };
}

async function switchValidator(key, categoryPayload) {
    let result;
    switch (key) {
        case "name":
            result = validateString(categoryPayload[key]);
            if (!result || result.length > dataTypes.VARCHAR_100) {
                return "Il nome inserito non è valido";
            }
            break;
        case "short_description":
            result = validateString(categoryPayload[key]);
            if (!result || result.length > dataTypes.VARCHAR_255) {
                return "La short description inserita non è valida"
            }
            break;
        default:
            break;
    }
}
