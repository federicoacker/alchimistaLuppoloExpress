import dataTypes from "../../db/dataTypes.js";
import { validateString } from "./validateString.js";
import { validateNumber } from "./validateNumber.js";

const validOrderFields = new Set(
    [
        "first_name",
        "last_name",
        "city",
        "address_line_1",
        "postal_code",
        "email",
        "phone",
        "date_of_birth",
        "total_price",
        "shipping_price",
        "products_price",
        "status",
        "products"
    ]
);

export function validateOrderPayload(orderPayload) {
    const errors = [];

    const orderFieldsReceived = new Set(Object.getOwnPropertyNames(orderPayload));

    const extraFields = [...orderFieldsReceived].filter(field => !validOrderFields.has(field));
    const missingFields = [...validOrderFields].filter(field => !orderFieldsReceived.has(field));

    if (missingFields.length !== 0) {
        errors.push(`Mancano i campi: ${missingFields.join(", ")}`);
    }

    if (extraFields.length !== 0) {
        errors.push(`Ci sono campi extra: ${extraFields.join(", ")}`);
    }

    for (const key of Object.getOwnPropertyNames(orderPayload)) {
        const validatorResult = switchValidator(key, orderPayload);

        if (validatorResult) {
            errors.push(validatorResult);
        }
    }

    return { result: orderPayload, errors };
}

function switchValidator(key, orderPayload) {
    let result;

    switch (key) {
        case "first_name":
            result = validateString(orderPayload[key]);
            if (!result || result.length > 150) {
                return "Il nome inserito non è valido";
            }
            break;

        case "last_name":
            result = validateString(orderPayload[key]);
            if (!result || result.length > 150) {
                return "Il cognome inserito non è valido";
            }
            break;

        case "city":
            result = validateString(orderPayload[key]);
            if (!result || result.length > dataTypes.VARCHAR_255) {
                return "La città inserita non è valida";
            }
            break;

        case "address_line_1":
            result = validateString(orderPayload[key]);
            if (!result || result.length > dataTypes.VARCHAR_255) {
                return "L'indirizzo inserito non è valido";
            }
            break;

        case "postal_code":
            result = validateString(orderPayload[key]);
            if (!result || result.length > 20) {
                return "Il codice postale inserito non è valido";
            }
            break;

        case "email":
            result = validateString(orderPayload[key]);
            if (!result || result.length > dataTypes.VARCHAR_255 || !isValidEmail(result)) {
                return "L'email inserita non è valida";
            }
            break;

        case "phone":
            result = validateString(orderPayload[key]);
            if (!result || result.length > 15) {
                return "Il numero di telefono inserito non è valido";
            }
            break;

        case "date_of_birth":
            result = validateString(orderPayload[key]);
            if (!result || !isValidDate(result)) {
                return "La data di nascita inserita non è valida";
            }
            break;

        case "total_price":
        case "shipping_price":
        case "products_price":
            if (!isValidPrice(orderPayload[key])) {
                return `Il campo ${key} non è valido`;
            }
            break;

        case "status":
            result = validateString(orderPayload[key]);
            if (!result || !dataTypes.STATUS.includes(result)) {
                return "Lo status inserito non è valido";
            }
            break;

        case "products":
            if (!Array.isArray(orderPayload[key]) || orderPayload[key].length === 0) {
                return "I prodotti inseriti non sono validi";
            }
            for (const product of orderPayload[key]) {
                if (!product || typeof product !== "object") {
                    return "I dati dei prodotti inseriti non sono validi";
                }
                const productSlug = validateString(product.product_slug);
                const quantity = validateNumber(product.quantity);
                if (!productSlug || quantity === null || quantity <= 0) {
                    return "I dati dei prodotti inseriti non sono validi";
                }
            }
            break;

        default:
            break;
    }
}

function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidDate(value) {
    return /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value));
}

function isValidPrice(value) {
    const parsedValue = Number(value);

    if (value === undefined || value === null || value === "") {
        return false;
    }

    if (Number.isNaN(parsedValue)) {
        return false;
    }

    if (parsedValue < 0 || parsedValue > dataTypes.DECIMAL) {
        return false;
    }

    return true;
}