
import { checkSlugInDB } from "../db/queries/checkSlugInDB.js";

async function createSlug(title, table) {
    if (!title) {
        return null;
    }
    const trimmedTitle = title.trim();
    const slug = title.toLowerCase().replace(/[^a-zA-Z0-9_-]/g, "-");

    let increment = 0;
    let foundDuplicateSlug;
    let slugFinal = slug;

    do {
        if (increment < 10) {
            slugFinal = slug + (increment === 0 ? "" : `-${increment}`);
        }
        else {
            slugFinal = slug + crypto.randomUUID();
        }

        foundDuplicateSlug = await checkSlugInDB(slugFinal, table);

        increment++;

    } while (foundDuplicateSlug.error !== 404);

    return slugFinal;
}

export default createSlug;