export function validateString(value) {
    if (typeof value !== "string" || value.trim().length === 0) {
        return null;
    }

    return value.trim();
}