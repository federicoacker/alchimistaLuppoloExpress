import { mapProducts } from "./mapProducts.js";
import { reduceCategoriesForProducts } from "./reduceCategoriesForProducts.js";

export function incorporateProducts(products) {
    let equalProducts = [];
    let groupedProducts = [];
    let lastSlug;
    for (let i = 0; i < products.length; i++) {
        const currentProduct = products[i];
        if (i === 0) {
            lastSlug = currentProduct.slug;
            equalProducts.push(currentProduct);
        }
        else {
            if (currentProduct.slug === lastSlug) {
                equalProducts.push(currentProduct);
            }
            else {
                lastSlug = currentProduct.slug;
                const reducedProduct = reduceCategoriesForProducts(equalProducts);
                groupedProducts.push(reducedProduct);
                equalProducts = [currentProduct];
            }
        }
    }
    if (equalProducts.length !== 0) {
        const reducedProduct = reduceCategoriesForProducts(equalProducts);

        groupedProducts.push(reducedProduct);
    }
    const mappedProducts = mapProducts(groupedProducts);
    return mappedProducts;
}