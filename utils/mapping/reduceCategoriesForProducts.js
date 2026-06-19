export function reduceCategoriesForProducts(products){
    const singleProduct = products.reduce((accumulator, currentProduct, index) => {
            if(index === 0){
                accumulator = currentProduct;
                accumulator.categories = [{
                    name: currentProduct.category_name,
                    slug: currentProduct.category_slug
                }];
            }
            else{
                accumulator.categories.push({
                    name: currentProduct.category_name,
                    slug: currentProduct.category_slug
                });
            }
            return accumulator;
        }, {});
    return singleProduct;
}