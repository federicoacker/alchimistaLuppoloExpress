export function mapProducts(products){
    const mappedProducts = products.map(product => {
        return {
            slug: product.slug,
            name: product.name,
            description: product.description,
            short_description: product.short_description,
            origin: product.origin,
            brewery: product.brewery,
            abv: Number(product.abv),
            image: `${process.env.PRODUCT_IMG_PATH}/${product.image}`,
            serving_temp: product.serving_temp,
            price: Number(product.price),
            updated_at: product.updated_at,
            created_at: product.created_at,
            ibu: product.ibu,
            pairs_with: product.pairs_with,
            suggested_glass: product.suggested_glass,
            ingredients: product.ingredients,
            categories: product.categories,
            size: product.size
        };
    });
    return mappedProducts;
}