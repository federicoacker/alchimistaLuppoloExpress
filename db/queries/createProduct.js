import connection from "../db.js"

export async function createProduct(productPayload){
    const insertProductQuery = `
    INSERT INTO products (
    name, 
    description, 
    short_description, 
    origin, 
    brewery,
    abv,
    image,
    serving_temp,
    price,
    ibu,
    pairs_with,
    suggested_glass,
    ingredients,
    size,
    colour,
    subtype)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`

    const {
        name,
        description,
        short_description,
        origin,
        brewery,
        abv,
        image,
        serving_temp,
        price,
        ibu,
        pairs_with,
        suggested_glass,
        ingredients,
        size,
        colour,
        subtype,
        categories
    }

    try {
        const results = await connection.execute(insertProductQuery, [
            name, 
            description, 
            short_description, 
            origin, 
            brewery, 
            abv, 
            image, 
            serving_temp, 
            price, 
            ibu, 
            pairs_with, 
            suggested_glass, 
            ingredients, 
            size, 
            colour, 
            subtype
        ]);
        for(let i = 0; i < categories.length; i++){
            const currentCategory = categories[i]
            const {result, error} = await checkSlugInDB(currentCategory.slug, "categories");
            if(error){
                return {error, result:null};
            }
        }
    }
    catch(error){
        return {error:500, result:null};
    }
}