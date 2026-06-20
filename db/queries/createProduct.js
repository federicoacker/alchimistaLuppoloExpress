import createSlug from "../../utils/createSlug.js";
import { checkSlugInDB } from "./checkSlugInDB.js";
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
    subtype,
    slug)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`

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
    } = productPayload;

    try {
        const createdSlug = await createSlug(name, "products");
        productPayload.slug = createdSlug;
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
            subtype,
            createdSlug
        ]);
        for(let i = 0; i < categories.length; i++){
            const currentCategory = categories[i]
            const {result, error} = await checkSlugInDB(currentCategory.slug, "categories");
            if(error){
                return {error, result:null};
            }
        }
        const categoryProductIds = [];
        for(let i = 0; i < categories.length; i++){
            const currentCategory = categories[i];
            const {result: categoryProductId, error} = await findCategoryProductIds(currentCategory, productPayload);
            if(error){
                return {error, result:null};
            }
            categoryProductIds.push(categoryProductId);
        }
        console.log(categoryProductIds);
        for(let i = 0; i < categoryProductIds.length; i++){
            const currentCategoryProductId = categoryProductIds[i];
            const {result, error} = await linkCategoryProducts(currentCategoryProductId);
        }
        
        return {error:null, results};

    }
    catch(error){
        return {error:500, result:null};
    }
}

async function findCategoryProductIds(category, product){
    const selectProductQuery = `
    SELECT p.id
    FROM products as p
    WHERE p.slug = ?
    `;

    const selectCategoryQuery = `
    SELECT c.id
    FROM categories as c
    WHERE c.slug = ?
    `;

    try{
        const [productId] = await connection.execute(selectProductQuery, [product.slug]);
        const [categoryId] = await connection.execute(selectCategoryQuery, [category.slug]);
        return {error: null, result:{productId: productId[0].id, categoryId: categoryId[0].id}};
    }
    catch(error){
        console.log(error);
        return {error:500, result:null};
    }
}

async function linkCategoryProducts({categoryId, productId}){
    const linkQuery = `
    INSERT INTO category_product(product_id, category_id)
    VALUES(?, ?);
    `
    try{
        const [result] = await connection.execute(linkQuery, [productId, categoryId]);
        return {error:null, result}
    }
    catch(error){
        return {error:500, result:null};
    }
}
