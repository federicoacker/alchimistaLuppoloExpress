import { mapProducts } from "./mapProducts.js";
import { reduceCategoriesForProducts } from "./reduceCategoriesForProducts.js";

export function incorporateProducts(products, limit = 1, offset = 0, isCount = false) {

    let saw = Array(products.length);
    let groupedArray = [];
    let biggerArray = [];


    for (let i = 0; i < saw.length; i++) {
        saw[i] = false;
    }

    for (let i = 0; i < products.length; i++) {

        if (!saw[i]) {
            let groupedArray = [products[i]];
            

            for (let j = i + 1; j < products.length; j++) {
                if (products[i].slug === products[j].slug) {
                    groupedArray.push(products[j]);
                    saw[j] = true;
                }
            }
            
            const reducedProduct = reduceCategoriesForProducts(groupedArray);
            biggerArray.push(reducedProduct);
        }
    }  

    
    const mappedProducts = mapProducts(biggerArray);
    let slicedProducts = mappedProducts;
    
    if (!isCount && limit !== 0) {
        slicedProducts = mappedProducts.slice(offset, offset + limit);
    }

    return slicedProducts;
}