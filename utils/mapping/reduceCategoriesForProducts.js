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

                const accumulatorCategories = accumulator.categories.map(category => category.name);

                if(!accumulatorCategories.includes(currentProduct.category_name)){
                    accumulator.categories.push({
                        name: currentProduct.category_name,
                        slug: currentProduct.category_slug
                    });
                }
            }
            return accumulator;
        }, {});
    return singleProduct;
}